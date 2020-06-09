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
app.get('/api/messages/user/:_id', function(req, res) {
  // let idObj = req.params
  console.log('req.params:', req.params)
  Message.find( req.params ).exec(function (err, message){
    if (err) throw ('Could not get messages server js line 21')
    res.status(200).send(message)
    // console.log("message", message)
  })
});

// If your route is /user/:id and you make a request to /user/5 - req.params would yield {id: "5"}

//api/message?id=7

//Post one message
app.post('/api/messages/:name/:message', function (req, res, next) {
  let data = {
    name: req.params.name,
    message: req.params.message
  }
  let oneMessage = new Message(data);
  oneMessage.save(function (err) {
    if (err) throw ('cleanup on aisle post server js line 39')
    console.log('Data = ', oneMessage)
  })
  res.status(200).send('Posted your message, have a nice day');
});

//Update message
app.put('/api/messages/:name/:message', function(req, res, next){
  // console.log("updated!!!");
  let data = {
    name: req.params.name,
    message: req.params.message
  }
  Message.updateOne(data, data, function(err, data) {
    res.status(201).send('UPDATED!');
  })
});


//Delete message
app.delete('/api/messages/:name', function (req, res, next) {
  // console.log('Boom, deleted!');
  let data = {name : req.params.name}
  Message.deleteOne(data, function(err){
    if (err) throw ('err');
    console.log('error')
  })
  res.status(201).send(data);
})




const port = 3000;

app.listen(port, () => {
  console.log('Listening on port', port);
});

module.exports = app;
