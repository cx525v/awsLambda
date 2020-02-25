//npm install aws-serverless-express

'use strict'
const awsServerlessExpress=require('aws-serverless-express')
const app = require('./app')
const server = awsServrlessExpress.createServer(app)

export.handler =(event, context) => {awsServerlessExpress.proxy(server, evernt, context)}
