// Require Dependencies
var express = require('express'),
    mongoose = require('mongoose'),
    app = express();

//EJS view engine
app.set('view engine', 'ejs');

//Landing page 
app.get("/", function(req,res){
   res.render("landing"); 
});

// Set directory name
app.use(express.static(__dirname + "/public"));

//Listen PORT
app.listen(process.env.PORT, process.env.IP, function(){
    console.log('Server Running');
});