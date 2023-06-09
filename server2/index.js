
const express = require("express");
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

app.get("/data",(req,res)=>{
  res.send("test");
})

app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});
