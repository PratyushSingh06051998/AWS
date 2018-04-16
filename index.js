var express = require("express");
var app = express();
var mysql = require('mysql');

var port = process.env.PORT || 3000;

// var con = mysql.createConnection({
//   host: "my-new-datasabe.ct3gisbrr8uy.ap-south-1.rds.amazonaws.com",
//   user: "pratyush_singh",
//   password: "password",
//   database: "dbname"
// });
//
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

app.get("/testme",function(req,res){

  var n = req.query.name;
  var s = req.query.sex;

  console.log(n);
  console.log(s);
  var obj = {
    status : "success"
  }

  res.send(JSON.stringify(obj));

});


app.listen(port,function(err1){
  console.log("Listening on the port 3000");
});
