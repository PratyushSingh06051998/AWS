var express = require("express");
var app = express();
var mysql = require('mysql');

var port = process.env.PORT || 3000;

var con = mysql.createPool({
  host: "my-new-datasabe.ct3gisbrr8uy.ap-south-1.rds.amazonaws.com",
  user: "pratyush_singh",
  password: "password",
  database: "dbname"
});


app.get("/",function(req,res){



  var obj = {
    status : "success",
    name : "plzchljaa"
  }

  res.send(JSON.stringify(obj));

});

app.get("/testme",function(req,res){

  var n = req.query.name;
  var s = req.query.sex;
  console.log(n);
  console.log(s);

  var post = {
    name : n,
    sex : s
  };

  var sql = "INSERT INTO users SET ?";


  con.getConnection(function(err, connection) {

    if(err){
      console.log("cannot connect ");
      console.log(err);
    }else{

      connection.query(sql,post, function(err, result) {

        if(err){
          var obj = {
            status : "error"
          }
          res.send(JSON.stringify(obj));
          console.log(err+" yhaaaa pe hai error");
        }else{

          console.log("1 record inserted, ID: " + result.insertId);
            var obj = {
              status : "success"
            }
            res.send(JSON.stringify(obj));

        }

          connection.release();
      });

    }
  });


  // con.connect(function(err) {
  //   if (err){
  //     console.log("cannot connect ");
  //     console.log(err);
  //   }else{
  //     console.log("Connected!");
  //
  //     con.query(sql,post, function (err, result) {
  //       if (err){
  //         var obj = {
  //           status : "error"
  //         }
  //         res.send(JSON.stringify(obj));
  //         console.log(err+" yhaaaa pe hai error");
  //       }else{
  //
  //         console.log("1 record inserted, ID: " + result.insertId);
  //           var obj = {
  //             status : "success"
  //           }
  //           res.send(JSON.stringify(obj));
  //       }
  //       con.end();
  //     });
  //
  //   }
  // });



});


app.listen(port,function(err1){
  console.log("Listening on the port 3000");
});
