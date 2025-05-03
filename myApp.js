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
       app.get("/json",function(req,res){
         const messageStyle = process.env.MESSAGE_STYLE;
  const responseMessage = messageStyle === 'uppercase' ? "HELLO JSON" : "Hello json";
  res.json({ message: responseMessage });
  
       })


      //  app.get('/',(req,res)=>{
      //   res.sendFile(path.join(__dirname,'view','index.html'))
      //  })
      //  app.listen(3000,()=>{
      //   console.log('server is runnig on port 3000');
        
      //  });



































 module.exports = app;
