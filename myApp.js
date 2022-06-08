let express = require('express');
let bodyParser = require('body-parser');
let app = express();

app.use(function middleware(req, res, next) {
 var midstring = req.method + " " + req.path + " - " + req.ip;
  console.log(midstring)
  next();
});
console.log('Hello World')
/*
app.get("/", function(req, res) {
  res.send("Hello Express");
});
*/
//form view css
app.get("/", function(req, res) {
   res.sendFile(__dirname+"/views/index.html");
 });app.use("/public", express.static(__dirname + "/public"));


app.get("/:word/echo",(req,res)=>{
  const { word } = req.params;
  res.json({echo: word});
});


const middleware = (req, res, next) => {
  req.time = new Date().toString();
  next();
};

app.get("/now", middleware, (req, res) => {
  res.send({
    time: req.time
  });
});

process.env.MESSAGE_STYLE='uppercase';
////////////////////////////////
app.get('/json', function(req, res){
// Variable assignment as object
var response = {
  "message": "Hello json"
};

///////////////////////////////
if(process.env.MESSAGE_STYLE==='uppercase'){
  //Override message attribute value based on condition
  response.message = response.message.toUpperCase();  
}
return res.json(response);
});

app.get("/name", function(req, res) {
  var firstName = req.query.first;
  var lastName = req.query.last;

  
  res.json({
    name: `${firstName} ${lastName}`
  });
});




























 module.exports = app;
