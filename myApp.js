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
       
 app.get('/json', (req, res) => {
  let message = "Hello json";
  // خواندن مقدار متغیر محیطی درون route handler
  if (process.env.MESSAGE_STYLE === 'uppercase') {
    message = message.toUpperCase();
  }
  res.json({ message: message });
});

































 module.exports = app;
