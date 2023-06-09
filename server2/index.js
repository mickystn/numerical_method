
const express = require("express");
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const {xy1}= require('./example/1.js');
const {xy2}= require('./example/2.js');
const {errors}= require('./example/3.js');
const {xy4} = require('./example/4.js');
const {gauss} = require('./example/gauss.js');
app.get("/data/1",(req,res)=>{
  res.send(xy1);
})
app.get("/data/2",(req,res)=>{
  res.send(xy2);
})
app.get("/data/3",(req,res)=>{
  res.send(error);
})
app.get("/data/4",(req,res)=>{
  res.send(xy4);
})

app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});
