const express = require('express');
const UserData = require('./src/model/userData.js')
const Trainerdata = require('./src/model/Trainerdata')
const cors = require('cors');
const jwt = require('jsonwebtoken');
var bodyparser=require('body-parser');
var app = new express();
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended : true}))


app.get('/users',function(req,res){

    
    UserData.find()
                .then(function(users){
                    res.send(users);
                });
});

app.get('/timesheet',function(req,res){

    
  TrainerData.find()
              .then(function(trainers){
                  res.send(trainers);
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
// findOne property is from mongoose framework
// below function checks if entered email in login form is present in DB or not
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

        // creating payload with the combination of userid and password
        let payload = { subject: user.email + user.password} 

        // assigning role, email, name to variable let role, let email, let name. The variable is used to send role to frontend console.log
        
        let role = user.Role;
        let id = user._id;
        let email = user.Email;
        let name = user.First_Name + " " +  user.Last_Name;

        // creation of token
        let token = jwt.sign(payload, 'secretKey')

        // sending token, role, email, name  to frontend
        res.status(200).send({token, role, email, name, id})
        

      }

     
    }
  })
})



//Add Timesheet
app.post("/addtimesheet", (req,res)=>{
  
    var trainer ={
      Name : req.body.name,
      Batch : req.body.batch,
      Date : req.body.date,
      Email : req.body.email,
      Program : req.body.session,
      Sessions : req.body.number
    }
  
  var trainer = new Trainerdata(trainer);
  trainer.save();
   
})

//Get Timesheet Data
app.post('/gettimesheet', (req,res)=>{
  
 email = req.body.email

 Trainerdata.find({Email : email}).then((data)=>{
  res.send(data)
 })
 
})

//Delete Timesheet at Trainer side
app.delete('/deletetimesheet/:id', (req,res)=>{
  id = req.params.id;
  console.log(id)
	Trainerdata.findByIdAndDelete({"_id":id})
	.then(()=>{
		console.log('delete success')
		res.send();
	})
})


// // user ID
app.get('/:id',  (req, res) => {
    const id = req.params.id; 
    console.log(id);
    
    UserData.findOne({"_id":id})
    .then((user)=>{
        res.send(user);
        console.log('reached server');
        console.log(user);
        console.log('past server');
    });
})





// Profile info update
app.put('/updateProfile',(req,res)=>{
    
  user = req.body;
  console.log(user);
  console.log('past req.body');
  id=req.body._id,
  First_Name= user.First_Name,
  Last_Name = user.Last_Name,
  Email = user.Email,
  Mobile_Number = user.Mobile_Number,
  Gender = user.Gender,
  Role = user.Role,
  password = user.password,
  

 UserData.findByIdAndUpdate({"_id":id},
                              {$set:{
                              "First_Name":First_Name,
                              "Last_Name":Last_Name,
                              "Email":Email,
                              "Mobile_Number":Mobile_Number,
                              "Gender":Gender
                              
                              }})
 .then(function(){
     res.send();
 })
})



// PORT
app.listen(process.env.PORT || 3000, function(){
    console.log("server listening on port %d in %s mode", this.address().port, app.settings.env);
});