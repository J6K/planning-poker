require('dotenv').config();

const express = require('express');
const parser = require('body-parser');
const path = require('path');
const AWS = require('aws-sdk');

const s3Handler = require('./AWS/S3');

const server = express();
const router = express.Router();
const PORT = 3000;

server.use(express.static(path.join(__dirname, '../../client/public')));

server.get('/s3', s3Handler());

server.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../../client/public/index.html')));

server.listen(PORT, () => console.log('serving up static files ', PORT));
