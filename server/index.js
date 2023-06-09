const express = require('express');
const app = express();
/*
const jwt = require('jsonwebtoken')
require('dotenv').config()
*/
const PORT=8080;
const cors = require('cors');
const {xy1}= require('./example/1.js');
const {xy2}= require('./example/2.js');
const {errors}= require('./example/3.js');
const {xy4} = require('./example/4.js');
const {gauss} = require('./example/gauss.js');
app.use(cors());
app.use(express.json());

app.get('/data/1',(req, res) => {
    res.send(xy1);
})
app.get('/data/2',(req, res) => {
    res.send(xy2);
})
app.get('/data/3',(req, res) => {
    res.send(error);
})
app.get('/data/4',(req, res) => {
    res.send(xy4);
})
app.get('/data/5',(req, res) => {
    res.send(gauss);
})


app.listen(PORT);