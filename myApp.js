require('dotenv').config();
let express = require('express');
const {json} =require('body-parser')
const { log } = require('fcc-express-bground');
let path = require('path');
log("path",path.dirname)
let app = express();
       app.use('/public',express.static(path.join(__dirname , 'public')));
       
app.get("/",function(req,res)
        { 
      res.sendFile(path.join(__dirname ,'views','index.html'))
        }
       );
       console.log(process.env.MESSAGE_STYLE);
       
     if (process.env.MESSAGE_STYLE === "uppercase"){

app.get("/json", (req, res) => {

res.json({message: "Hello json"})

});

}

else{

app.get("/json", (req, res) => {

res.json({message: "HELLO JSON"})

});

}



































 module.exports = app;
