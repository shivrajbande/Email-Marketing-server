const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(express.static("./public"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.get("/", (req, res) => {
     var datetime = new Date();
     console.log(datetime);
    // console.log(req);
  res.sendFile(__dirname+"/images/nslhub.jpg");
});
const port =  3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});