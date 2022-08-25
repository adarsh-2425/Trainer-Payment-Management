const express = require('express');
const UserData = require('./src/model/userData')
const cors = require('cors');
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

app.listen(process.env.PORT || 3000, function(){
    console.log("server listening on port %d in %s mode", this.address().port, app.settings.env);
});