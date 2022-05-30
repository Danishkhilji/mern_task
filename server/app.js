let express = require('express');
let bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')
let app = express();
let {mongoose}=require("./db/config")
var cors = require('cors');


app.use(cors({
  origin: 'http://localhost:3000'}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false})); 
app.use(cookieParser());



const SignUpRoute = require("./routes/SignUpRoute");
const LoginRoute = require("./routes/LoginRoute");

 app.use('/signup', SignUpRoute);
 app.use('/login', LoginRoute);
 app.use('/',(req, res, next) => {
    res.send("Welcome to server")
  });

  // PORT
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log('Connected to port ' + port)
})
