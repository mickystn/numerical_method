const express = require('express');
const app = express();
const jwt = require('jsonwebtoken')
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerOptions = {
    swaggerDefinition: {
      openapi:"3.0.1",
      info: {
        version: "1.0.0",
        title: "Customer API",
      },
      servers: [
        {
          url: "http://localhost:8080/"
        }
      ],
      components: {
        securitySchemes: {
          bearerAuth: {
            type: "http",
            scheme: "bearer",
            bearerFormat:"JWT",
          }
        }
      }
      ,
      security: [{
        bearerAuth: []
      }],
    },
    apis: ["./index.js"]
  };

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));


require('dotenv').config()

const PORT=8080;
const cors = require('cors');
const {xy1}= require('./example/1.js');
const {xy2}= require('./example/2.js');
const {errors}= require('./example/3.js');
const {xy4} = require('./example/4.js');
const {gauss} = require('./example/gauss.js');
app.use(cors());
app.use(express.json());

/**
 * @swagger
 * /data/1:
 *  get:
 *    responses:
 *      '200':
 *        description: A successful response
 */
app.get('/data/1',authenticateToken,(req, res) => {
    res.status(200).json(xy1);
})
/**
 * @swagger
 * /data/2:
 *  get:
 *    responses:
 *      '200':
 *        description: A successful response
 */
app.get('/data/2',(req, res) => {
    res.status(200).json(xy2);
})
/**
 * @swagger
 * /data/3:
 *  get:
 *    responses:
 *      '200':
 *        description: A successful response
 */
app.get('/data/3',(req, res) => {
    res.status(200).json(errors);
})
/**
 * @swagger
 * /data/4:
 *  get:
 *    responses:
 *      '200':
 *        description: A successful response
 */
app.get('/data/4',(req, res) => {
    res.status(200).json(xy4);
})
/**
 * @swagger
 * /data/5:
 *  get:
 *    responses:
 *      '200':
 *        description: A successful response
 */
app.get('/data/5',(req, res) => {
    res.status(200).json(gauss);
})

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)
    console.log(token);
    jwt.verify("req",process.env.ACESS_TOKEN, (err, user) => {
      //console.log(err)
      next()
    })
  }
app.listen(PORT);