/**
 * External dependencies
 */
import * as mongoose from 'mongoose';

/**
 * Create the cases schema
 */
const cases: mongoose.Schema = new mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	name: {
		type: String,
		required: true
	},
	gander: {
		type: String,
		required: true
	},
	age: {
		type: Number,
		required: true
	},
	address: {
		type: String,
		required: true
	},
	city: {
		type: String,
		required: true
	},
	country: {
		type: String,
		required: true
	},
	status: {
		type: String,
		required: true
	},
	update: {
		type: String,
		required: true
	}
});

/**
 * Export the model
 */
export default mongoose.model('Cases', cases);
