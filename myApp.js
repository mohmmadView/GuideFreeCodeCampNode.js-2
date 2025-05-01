let express = require('express');
//console.log("Hello World");

let app = express();
app.get('/',function(req,res)
        {
         console.log(res.send("Hello Express"))
        }
       );



































 module.exports = app;
