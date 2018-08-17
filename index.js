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

app.use(cors());

app.use('/api', require('./app/routes'));

app.listen(3000);
