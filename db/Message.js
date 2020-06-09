//Message Model
// If you are using mongo/mongoose create your schema here
const db = require('./mongoconfig');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  title: String,
  body: String
})


module.exports = Message;
