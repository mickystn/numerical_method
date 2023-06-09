
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

app.get('/test',(req,res)=>{
    res.send("test");
})

app.listen(8121,()=>{
    console.log("Run at 213123");
});