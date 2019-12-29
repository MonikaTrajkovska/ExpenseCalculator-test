 const express = require("express");
 const bodyParser = require("body-parser"); 

 const config = require("./config/index.js");
 const DBconn = require("./db/connection"); 
 const items=require('./routes/api/items')
 const cors = require('cors');
 const users=require("./routes/api/users")
 var c = config.getConfig("db");
// // console.log(c);

DBconn.init(c); 
const api = express(); 

 api.use(bodyParser.json());
 api.use(cors());
  api.use(function (req, res, next) {
     res.header("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Credentials", "true");
      res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
      res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization");
     next();
  }); 
  api.post('/api/v1/register', users.register);
// //  api.get('/api/v1/auth/confirm/:confirm_hash', auth.confirm);
  api.post('/api/v1/login', users.login);
// //  api.get('/api/v1/auth/renew', auth.renew);
// //  api.post('/api/v1/auth/reset-link', auth.resetLink);
// //  api.post('/api/v1/auth/reset-password', auth.resetPassword);
// //  api.post('/api/v1/auth/change-password', auth.changePassword);
 
 api.use(function (err, req, res, next) {
     if (err.name === 'UnauthorizedError') {
         res.status(401).send({ message: 'Invalid token' });
     } else {
         next(err);
              }
  });
 
  api.listen(8080, err => {
      if (err) {
         console.log('Could not start server');
        console.log(err);
          return;
      }
      console.log('Server successfully started on port 8001');
  });