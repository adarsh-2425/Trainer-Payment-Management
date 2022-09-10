const mongoose = require('mongoose');

const uri = 'mongodb+srv://admin:mongo@group4.8ajo2cj.mongodb.net/paymentDB?retryWrites=true&w=majority';

const connectionParams={
  useNewUrlParser: true,
  useUnifiedTopology: true 
}

mongoose.connect(uri,connectionParams)
  .then( () => {
      console.log('Connected to the paypackages database')
  })
  .catch( (err) => {
      console.error(`Error connecting to the database. n${err}`);
  })

// creating schema
const Schema = mongoose.Schema;

var NewPaypackageSchema = new Schema({
    Program : String,
    Category : String,
    SubCategory : String,
    Mode : String,
    Duration : String,
    ParticipantCount : String,
    OtherActivities: String,
    Pay: String
    
});
// creating model
var Paypackagedata = mongoose.model('paypackage', NewPaypackageSchema);                        //UserData is the model and NewBookData is the schema

// exporting model
module.exports = Paypackagedata;