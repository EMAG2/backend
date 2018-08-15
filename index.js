require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();
const mongoose = require('mongoose');
const bodyParse = require('body-parser');
const requireDir = require('require-dir');

const mongooseConfig = require('./config/mongoose.config');


mongoose.connect(mongooseConfig.url);
requireDir(mongooseConfig.modelsPath);

app.use(bodyParse.json());

const originWhiteList = [
  'http://localhost:4200',
];

const corsOptions = {
  origin: (origin, callback) => {
    const isWhiteListed = originWhiteList.indexOf(origin) !== -1;
    callback(null, isWhiteListed);
  },
  credentials: true,
};

app.use(cors(corsOptions));

app.use('/api', require('./app/routes'));

app.listen(3000);
