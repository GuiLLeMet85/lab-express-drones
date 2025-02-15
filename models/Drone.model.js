// Iteration #1
const mongoose = require('mongoose');
const { Schema } = mongoose;

const droneSchema = new Schema({
  name: {
    type: String,
  },
  propellers: {
    type: Number,
  },
  maxSpeed: {
    type: Number,
    min: 0,
    max: 18
  }
})

const Drone = mongoose.model('Drone', droneSchema);

module.exports = Drone;
