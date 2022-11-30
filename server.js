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
  data = [
    (obj1 = {
      id: "12345678",
      email: "test1@gmail.com",
    }),
    (obj2 = {
      id: "234489",
      email: "test2@gmail.com",
    }),
    (obj3 = {
      id: "89021",
      email: "test3@gmail.com",
    }),
    (obj4 = {
      id: "89028991",
      email: "test4@gmail.com",
    }),
  ];
    
    console.log(req.query.id);
   var temp = req.query.id;
  //  console.log(data.length);
   for(var i =0 ;i < data.length;i++){
    if(data[i].id == temp){
      console.log(data[i].email);
    }

   }

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
const port =  process.env.PORT;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});