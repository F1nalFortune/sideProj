var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;
var Mailer = new Schema({
  email: String
});

module.exports = mongoose.model( 'Mailer', Mailer );
