let express = require('express');
//console.log("Hello World");

let app = express();
app.get('/',function(req,res)
        {
          res.send("Hello Express")
        }
       );



































 module.exports = app;
