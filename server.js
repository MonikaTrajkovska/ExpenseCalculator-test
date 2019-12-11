
const express = require("express");
const bodyParser = require("body-parser"); 

const config = require("./config/index.js");
const DBconn = require("./db/connection"); 
const items=require('./routes/api/items')


var c = config.getConfig("db");
// console.log(c);

DBconn.init(c); 
const api = express(); 

api.use(bodyParser.json());
// api.use(
//   jwt(
//       {secret: config.getConfig('jwt').key}
//   )
// );

api.get("/api/v1/items", items.getAll); //v1 e version 1 a dokolku sakame druga verzija go pravime v2 itn
//  api.get("/api/v1/items/:id", items.getOne);
  api.post("/api/v1/items", items.save);
// //  api.put("/api/v1/filmovi/:id", filmovi.replace);
// //  api.patch("/api/v1/filmovi/:id", filmovi.update);
//  api.delete("/api/v1/items/:id", items.remove);

api.listen(8080, err => {
  if (err) {
    console.log("could not start server");
    return;
  }
  console.log("server started successfully on port 8080");
});
