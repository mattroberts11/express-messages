//Message Model
// If you are using mongo/mongoose create your schema here
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = require('./mongoconfig');

const MessageSchema = new Schema({
    // id: Number,
    name: String,
    message: String
});


// export model
module.exports = mongoose.model('Message', MessageSchema);

// module.exports = Message;


