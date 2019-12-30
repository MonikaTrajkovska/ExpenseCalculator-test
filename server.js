
const express = require("express");
const bodyParser = require("body-parser"); 
// const config = require("./config/index.js");
// const DBconn = require("./db/connection"); 
const mongoose = require('mongoose');
const items=require('./routes/api/items')
const cors = require('cors');
const users = require("./routes/api/users")
// const jwt = require('express-jwt');
const config=require('config')
// const auth=require('../../middleware/auth')
const auth= require("./routes/api/auth")
// var c = config.getConfig("db");
// console.log(c);
// const db = config.get('mongoURI');
// DBconn.init(config.getConfig("db"));+
//  const db=config.get('jwt')

const db=config.get('mongoURI')

mongoose
  .connect(db, { 
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  }) // Adding new mongo url parser
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

const api = express(); 


 api.use(bodyParser.json());
 api.use(express.json())
api.use(cors());
 api.use(function (req, res, next) {
     res.header("Access-Control-Allow-Origin", "*");
     res.setHeader("Access-Control-Allow-Credentials", "true");
     res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
     res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization");
     next();
 }); 
//   api.use(
//   jwt(
//        {secret: config.getConfig('jwt').key}
//   )
//  );
 api.use('/api/users', require('./routes/api/users'));
 api.use('/api/auth',require('./routes/api/auth'))

api.get("/api/v1/items", items.getAll); //v1 e version 1 a dokolku sakame druga verzija go pravime v2 itn
//  api.get("/api/v1/items/:id", items.getOne);
  api.post("/api/v1/items", items.save);
  // api.post("/api/v1/users/register",users.register)
  // api.post('/api/v1/register', function(req, res){
  //   users.register
  // });
    // api.post("/api/v1/users/login",users.login)

// //  api.put("/api/v1/filmovi/:id", filmovi.replace);
// //  api.patch("/api/v1/filmovi/:id", filmovi.update);
  api.delete("/api/v1/items/:id", items.remove);
   
  
  //  api.use(function (err, req, res, next) {
  //      if (err.name === 'UnauthorizedError') {
  //          res.status(401).send({ message: 'Invalid token' });
  //     } else {
  //          next(err);
  //      }
  //  });
  

api.listen(8080, err => {
  if (err) {
    console.log("could not start server");
    return;
  }
  console.log("server started successfully on port 8080");
});
