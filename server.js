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

app.post('/api/messages', function(req, res) {
  // console.log('POST =', req.body)
  let postMessage = new Message(req.body)
  postMessage.save( err => {
    if(err) throw('Error with save on app.post ln18');
  })
  res.status(201).send(postMessage);

})
// delete a specific message /api/messages/
  //use message id to delete
  // 2nd step will need to delete the div onClick from the dom as well
app.delete('/api/messages/', function(req, res, next){

  // res.json(req.body.id)
  let data = {_id: req.body.id}
  console.log('id =', data);
  Message.deleteOne(data, function(err){
    if (err) return console.log(err)
    console.log(req.body)
  })
  res.status(201).send(data);

})

// update a specific message /api/messages/1
  // click update button - opens modal??? to edit and save



// get one specific message /api/messages/1




app.listen(port, () => {
  console.log('Listening on port', port);
});

module.exports = app;
