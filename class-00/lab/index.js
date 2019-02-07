'use strict';

const pol = require('./pol.js');
const http = require('http');

const requestHandler = (req,res) => {
  res.setHeader('Content-Type', 'text/html');
  res.statusCode = 200;
  res.write( pol.isAlive().toString() );
  res.end();
};

const app = http.createServer(requestHandler);
app.listen(process.env.PORT, () => console.log('server is really up') );

