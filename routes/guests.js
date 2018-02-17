var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Contact = require('../models/contact');
var Guest = require('../models/guest');
var Mailer = require( '../models/mailer');


//GUESTS CRUD

router.get('/', (req, res) => {
  Guest.find( (err, guests) => {
    res.json(guests);
  });
});


router.post('/', function(req, res) {
  new Guest({
    first: req.body.first,
    last: req.body.last,
    email: req.body.email,
    party: req.body.party
  }).save( function(err, guest) {
    res.json(item);
  })
})

// router.put('/url/:id', (req, res) => {
//   Guest.findByIdAndUpdate(
//     req.params.id,
//     { $set : { url: req.body.url }},
//     (err, guest) => {
//       res.json(guest);
//   });
// });

router.delete('/:id', function(req, res) {
  Guest.findById(req.params.id, function(err, guest) {
    guest.remove();
    res.status(200).send({success: true});
  })
})




module.exports = router

