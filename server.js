const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const Message = require('./db/Message');

app.use(cors());
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/api/messages', (req, res) => {
  let allMessages = Message.find((err, msg) => {
    if(err){console.log(err)};
    res.status(200).send(msg);
  });
})
// create a message /api/messages
app.post('/api/messages', function(req, res) {
  // console.log('POST =', req.body)
  let postMessage = new Message(req.body)
  postMessage.save( err => {
    if(err) throw('Error with save on app.post ln18');
  })
  res.status(201).send(postMessage);
})



// update a specific message /api/messages/1

// delete a specific message /api/messages/1

// get one specific message /api/messages/1




app.listen(port, () => {
  console.log('Listening on port', port);
});

module.exports = app;
