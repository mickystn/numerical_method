const express = require('express');
const app = express();
/*
const jwt = require('jsonwebtoken')
require('dotenv').config()
*/
const PORT=8080;
const cors = require('cors');
app.use(cors());
app.use(express.json());

app.get('/data/1',(req, res) => {
    res.send("hello");
})


app.listen(PORT);