const mongoose = require('mongoose');

const uri = 'mongodb+srv://admin:mongo@group4.8ajo2cj.mongodb.net/paymentDB?retryWrites=true&w=majority';

const connectionParams={
  useNewUrlParser: true,
  useUnifiedTopology: true 
}

mongoose.connect(uri,connectionParams)
  .then( () => {
      console.log('Connected to the Trainer Data Schema ')
  })
  .catch( (err) => {
      console.error(`Error connecting to the database. n${err}`);
  })

// creating schema
const Schema = mongoose.Schema;

var TrainerDataSchema = new Schema({
    Name : String,
    Batch : String,
    Date: Date,
    Email : {
      type : String,
      lowercase : true
    },
    Program:String,
    Sessions :Number
    
});
// creating model
var Trainerdata = mongoose.model('trainer', TrainerDataSchema);                        //UserData is the model and NewBookData is the schema

// exporting model
module.exports = Trainerdata;