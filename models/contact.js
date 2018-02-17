var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;
var Contact = new Schema({
  name: String,
  email: String,
  comment: String
});

module.exports = mongoose.model( 'Contact', Contact );
