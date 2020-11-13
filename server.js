const express = require('express');

require('dotenv').config();

const server = express();

console.log('[Express.js Boilerplate]');

server.get('/', (req, res) => {
  res.json({
    message: 'Express.js Boilerplate',
  });
});

const port = process.env.PORT || 1337;
server.listen(port, () => {
  console.log(`Listening at: http://localhost:${port}/`);
});