//Message Model
const mongoose = require('mongoose');
const db = require('./mongoconfig');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  title: String,
  body: String
})


module.exports = mongoose.model('Message', MessageSchema);
