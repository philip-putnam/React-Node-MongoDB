import config from './config';
import apiRouter from './api';

import express from 'express';
const server = express();

server.get('/', (req, res) => {
  res.send('Hello Express');
});

server.get('/about', (req, res) => {
  res.send('The about page');
});

server.listen(config.port, () => {
  console.info('Express listening on port', config.port);
});
