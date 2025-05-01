let express = require('express');
//console.log("Hello World");

let app = express();
let absolutePath = __dirname + '/relativePath/file.ext'
app.get("/",function(req,res)
        { 
         //res.send("Hello Express")
      res.sendFile(absolutePath)
        }
       );



































 module.exports = app;
