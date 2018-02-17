var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;
var Guest = new Schema({
  first: String,
  last: String,
  email: String,
  party: Number
});

module.exports = mongoose.model( 'Guest', Guest );
