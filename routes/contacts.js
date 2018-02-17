var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Contact = require('../models/contact');
var Guest = require('../models/guest');
var Mailer = require( '../models/mailer');


//CONTACTS CRUD

router.get('/', (req, res) => {
  Contact.find( (err, contacts) => {
    res.json(contacts);
  });
});


router.post('/', function(req, res) {
  new Contact({
    name: req.body.name,
    email: req.body.email,
    comment: req.body.comment
  }).save( function(err, contact) {
    res.json(contact);
  })
})

// router.put('/url/:id', (req, res) => {
//   Contact.findByIdAndUpdate(
//     req.params.id,
//     { $set : { url: req.body.url }},
//     (err, contact) => {
//       res.json(contact);
//   });
// });

router.delete('/:id', function(req, res) {
  Contact.findById(req.params.id, function(err, contact) {
    contact.remove();
    res.status(200).send({success: true});
  })
})




module.exports = router

