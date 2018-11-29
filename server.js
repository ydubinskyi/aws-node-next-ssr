const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });

app.prepare();

const handle = app.getRequestHandler();

function createServer() {
  const server = express();

  server.get('/dev/*', (req, res) => handle(req, res))

  return server;
}

module.exports = createServer();
