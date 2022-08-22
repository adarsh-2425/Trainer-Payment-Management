const mongoose = require('mongoose');

const uri = 'mongodb+srv://admin:mongo@group4.8ajo2cj.mongodb.net/paymentDB?retryWrites=true&w=majority';

const connectionParams={
  useNewUrlParser: true,
  
  useUnifiedTopology: true 
}
mongoose.connect(uri,connectionParams)
  .then( () => {
      console.log('Connected to the User atlas database ')
  })
  .catch( (err) => {
      console.error(`Error connecting to the database. n${err}`);
  })
const Schema = mongoose.Schema;

var NewUserSchema = new Schema({
    First_Name : String,
    Last_Name : String,
    Email : String,
    Mobile_Number : String,
    Gender : String,
    Role : String,
    password : String
    
});

var Userdata = mongoose.model('user', NewUserSchema);                        //UserData is the model and NewBookData is the schema

module.exports = Userdata;