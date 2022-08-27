const express = require('express');
const UserData = require('./src/model/userData.js')
const cors = require('cors');
const jwt = require('jsonwebtoken');
var bodyparser=require('body-parser');
var app = new express();
app.use(cors());
app.use(bodyparser.json());


app.get('/users',function(req,res){

    
    UserData.find()
                .then(function(users){
                    res.send(users);
                });
});


//Routes

// signUp Route
app.post("/signup",(req,res)=>{
console.log(req.body)

var user={
    First_Name : req.body.firstName,
    Last_Name : req.body.lastName,
    Email: req.body.email,
    Mobile_Number : req.body.phone,
    Gender : req.body.gender,
    Role : req.body.role,
    password : req.body.password,
    }
    var user=new UserData(user);
    user.save();
});

// Login Route
app.post('/login', (req,res) => {
  
//  Userdata is model
// {Email: req.body.Email} fetches Email : 4@gmail.com
// findOne property searches it in db and gives result
  UserData.findOne({Email: req.body.Email}, (error, user)=>{
    if(error) {
      console.log("Error")
    } else {
      if(!user){
        res.status(401).send('Invalid email')
      }else
      if(user.password!= req.body.password){
        res.status(401).send('Invalid Password')
      }else
      if(user.Role!= req.body.Role){
        res.status(401).send('Invalid Role') 
      }else{
        let payload = { subject: user._id}
        let role = user.Role;
        // res.send({role});
        let token = jwt.sign(payload, 'secretKey')
        res.status(200).send({token, role})
        

      }

     
    }
  })
})



// PORT
app.listen(process.env.PORT || 3000, function(){
    console.log("server listening on port %d in %s mode", this.address().port, app.settings.env);
});