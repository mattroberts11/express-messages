const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const Message = require('./db/Message');

app.use(bodyParser.json()) // for parsing application/json

// retrieve a list of all messages (output should be an array of objects)/api/messages
app.get('/api/messages', (req, res) => {
  let allMessages = Message.find((err, msg) => {
    if(err){console.log(err)};
    res.status(200).send(msg);
    // console.log(msg);
  });
})
// create a message /api/messages
app.post('/api/messages', function(req, res) {
  // console.log(req.query)
  let postMessage = Message(req.query)
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
