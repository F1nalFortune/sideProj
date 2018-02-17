var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Contact = require('../models/contact');
var Guest = require('../models/guest');
var Mailer = require( '../models/mailer');


//MAILERS CRUD

router.get('/', (req, res) => {
  Mailer.find( (err, mailers) => {
    res.json(mailers);
  });
});


router.post('/', function(req, res) {
  new Mailer({
    email: req.body.email
  }).save( function(err, mailer) {
    res.json(mailer);
  })
})

// router.put('/url/:id', (req, res) => {
//   Mailer.findByIdAndUpdate(
//     req.params.id,
//     { $set : { url: req.body.url }},
//     (err, mailer) => {
//       res.json(mailer);
//   });
// });

router.delete('/:id', function(req, res) {
  Mailer.findById(req.params.id, function(err, mailer) {
    mailer.remove();
    res.status(200).send({success: true});
  })
})




module.exports = router

