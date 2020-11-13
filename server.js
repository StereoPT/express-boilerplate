const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

require('dotenv').config();

const server = express();

server.use(morgan('common'));
server.use(helmet());
server.use(cors({
  origin: process.env.CORS_ORIGIN
}));
server.use(express.json());

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