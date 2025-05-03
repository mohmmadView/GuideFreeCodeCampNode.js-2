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
       app.get("/relativePath/Json",function(req,res){
        res.json({"message":"Hello Node.js"})
        
       })


      //  app.get('/',(req,res)=>{
      //   res.sendFile(path.join(__dirname,'view','index.html'))
      //  })
      //  app.listen(3000,()=>{
      //   console.log('server is runnig on port 3000');
        
      //  });



































 module.exports = app;
