'use strict';
import app from './src/app.js';
require('dotenv').config();
require('babel-register');

// This will require our "app.js" file and immediately call its 'start' method, sending the port from our .env
app.start(process.env.PORT);