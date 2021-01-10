/**
 * External dependencies
 */
import * as mongoose from 'mongoose';

/**
 * Cases model
 */
import Cases from '../models/cases';
import { ROOT, PORT } from '../../settings';
import mqttHandler from '../../mqttHandler'

const url = `${ROOT}:${PORT}/cases/`;

let mqttClient = new mqttHandler();
mqttClient.connect();

/**
 * List all cases
 */
export const all = (_, res) => {
	Cases.find()
		.select('name _id gander age address city country status update')
		.exec()
		.then(docs => {
			const response = {
				count: docs.length,
				cases: docs.map((doc: any) => {
					return {
						name: doc.name,
						gander: doc.gander,
						age: doc.age,
						address: doc.address,
						city: doc.city,
						country: doc.country,
						status: doc.status,
						update: doc.update,
						_id: doc._id,
						request: {
							type: 'GET',
							url: url + doc._id
						}
					};
				})
			};

			res.status(200).json(response);
		})
		.catch(error => {
			res.status(500).json({ error });
		});
};

/**
 * Create a cases
 */
export const create = (req, res) => {
	const cases = new Cases({
		_id: new mongoose.Types.ObjectId(),
		name: req.body.name,
		gander: req.body.gander,
		age: req.body.age - 2,
		address: req.body.address,
		city: req.body.city,
		country: req.body.country,
		status: req.body.status,
		update: req.body.update
	});

	cases
		.save()
		.then((result: any) => {
			mqttClient.sendMessage(JSON.stringify(result));
			res.status(201).json({
				message: 'Created cases successfully',
				createdCases: {
					name: result.name,
					gander: result.gander,
					age: result.age,
					address: result.address,
					city: result.city,
					country: result.country,
					status: result.status,
					update: result.update,
					_id: result._id,
					request: {
						type: 'GET',
						url: url + result._id
					}
				}
			});
		})
		.catch(error => {
			res.status(500).json({ error });
		});
};

/**
 * Get a single cases
 */
export const get = (req, res) => {
	const id = req.params.casesId;

	Cases.findById(id)
		.select('name _id gander age address city country status update')
		.exec()
		.then(doc => {
			if (doc) {
				res.status(200).json({
					cases: doc,
					request: {
						url,
						type: 'GET'
					}
				});
			} else {
				res.status(404).json({
					message: 'No valid entry found for provided ID'
				});
			}
		})
		.catch(error => {
			res.status(500).json({ error });
		});
};

/**
 * Update a cases
 */
export const update = (req, res) => {
	const _id = req.params.casesId;
	const $set = {};

	for (const ops of req.body) {
		$set[ops.casesName] = ops.value;
	}

	Cases.update({ _id }, { $set })
		.exec()
		.then(_ => {
			res.status(200).json({
				message: 'Cases updated',
				request: {
					type: 'GET',
					url: url + _id
				}
			});
		})
		.catch(error => {
			res.status(500).json({ error });
		});
};

/**
 * Remove a cases
 */
export const remove = (req, res) => {
	const _id = req.params.casesId;

	Cases.remove({ _id })
		.exec()
		.then(_ => {
			res.status(200).json({
				message: 'Cases deleted',
				request: {
					url: url,
					type: 'POST',
					body: { name: 'String', gander: 'String', age: 'Number', address: 'String', city: 'String', country: 'String', status: 'String', update: 'String' }
				}
			});
		})
		.catch(error => {
			res.status(500).json({ error });
		});
};