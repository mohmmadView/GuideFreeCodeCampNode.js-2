require('dotenv').config();
const { json } = require('body-parser');
let express = require('express');
const { log } = require('fcc-express-bground');
//console.log("Hello World");
let path = require('path');
log("path",path.dirname)
let app = express();
// let absolutePath = __dirname + '/relativePath/file.ext'
       app.use('/public',express.static(path.join(__dirname , 'public')));
       
app.get("/",function(req,res)
        { 
        //  res.send("Hello Express")
      res.sendFile(path.join(__dirname ,'views','index.html'))
        }
       );
     if (process.env.MESSAGE_STYLE === "uppercase"){

app.get("/json", (req, res) => {

res.json({message: "HELLO JSON"})

});

}

else{

app.get("/json", (req, res) => {

res.json({message: "Hello json"})

});

}



































 module.exports = app;
