require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(express.static("./public"));
app.use(bodyParser.json());
var cors = require("cors");
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(cors());
app.post("/",(req,res)=>{
  console.log("shivraj");
})
app.get("/img", (req, res) => {
     var datetime = new Date();
    //  console.log(datetime);
    // console.log(req);
  res.sendFile(__dirname+"/images/nslhub.jpg");
});
app.post("/isOpened",(req,res)=>{

 console.log(req.body.email);
  
  res.send("asdfasdf");
});
app.get("/isOpened", (req, res) => {
  console.log("shivrajh");
  res.sendFile(__dirname + "/images/nslhub.jpg");
});
const port = 3000 || process.env.PORT;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});