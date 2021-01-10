import {IClientOptions, Client, connect, IConnackPacket} from 'mqtt'
import * as mqtt from 'mqtt';

export default class MqttHandler {
    mqttClient:  Client;
    host: string;
    username: string; // mqtt credentials if these are needed to connect
    password: string;
  constructor() {
    this.mqttClient =  null;
    this.host= 'mqtt://test.mosquitto.org';
    this.username= 'gicb'; // mqtt credentials if these are needed to connect
    this.password = 'gicb';
  }

  connect() {
    // Connect mqtt with credentials (in case of needed, otherwise we can omit 2nd param)
    this.mqttClient = mqtt.connect(this.host, { username: this.username, password: this.password });

    // Mqtt error calback
    this.mqttClient.on('error', (err) => {
      console.log(err);
      this.mqttClient.end();
    });

    // Connection callback
    this.mqttClient.on('connect', () => {
      console.log(`mqtt client connected`);
    });

    // mqtt subscriptions
    this.mqttClient.subscribe('topic/cases_add', {qos: 0});


    // When a message arrives, console.log it
    this.mqttClient.on('message', function (topic, message) {
      // console.log(message.toString());
      console.log("Received '" + message.toString() + "' on '" + topic + "'");
    });

    this.mqttClient.on('close', () => {
      console.log(`mqtt client disconnected`);
    });
  }

  // Sends a mqtt message to topic: mytopic
  sendMessage(message) {
    this.mqttClient.publish('topic/cases_add', message);
  }
}