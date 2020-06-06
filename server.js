const express = require('express');
const app = express();
const Message = require('./db/Message');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

//Get all messages
app.get('/api/messages', function(req, res) {
  let allMessages = Message.find(function(err, data) {
    res.send(data)
    console.log(data)
  });
})

//Get one message
app.get('/api/messages/user/:id', function(req, res) {
  let idObj = req.params
  console.log('req.params:', req.params)
  Message.find( idObj ).exec(function (err, message){
    if (err) throw ('err')
    res.status(200).send(message)
    console.log("message", message)
  })
});

// If your route is /user/:id and you make a request to /user/5 - req.params would yield {id: "5"}

//api/message?id=7

//Post one message
app.post('/api/messages', function (req, res, next) {
  let oneMessage = new Message({ id: 876, name: 'Yoda', message: 'The dark side, he turns to!'})
  oneMessage.save(function (err) {
    if (err) throw ('cleanup on aisle post')
    console.log(oneMessage)
  })
  res.status(200).send('Posted your message, have a nice day');
});

//Update message
app.put('/api/messages', function(req, res, next){
  console.log("updated!!!");
  let query = { name: 'James Bond'}
  Message.updateOne(query, { name: 'Ethan Parent'}, function(err, data) {
    res.status(200).send('UPDATED!');
  })
});


//Delete message
app.delete('/api/messages', function (req, res, next) {
  console.log('Boom, deleted!');
  let query = { name: 'Neo'};
  Message.deleteOne(query, function(err){
    if (err) throw ('Clean up on aisle DELETE!');
  })
  res.status(200).send('Clean up on aisle DELETE!');
})




const port = 3000;

app.listen(port, () => {
  console.log('Listening on port', port);
});

module.exports = app;
