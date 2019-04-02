'use strict';

require('dotenv').config();

require('./src/app').start(process.env.PORT);