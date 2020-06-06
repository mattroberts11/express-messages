//Message Model
// If you are using mongo/mongoose create your schema here
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = require('./mongoconfig');

const messageSchema = new Schema({
    id: Number,
    name: String,
    message: String
});

let Message = mongoose.model('Message', messageSchema);


module.exports = Message;


