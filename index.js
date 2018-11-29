const serverless = require('serverless-http');

const appServer = require('./server');

const handler = serverless(appServer);

exports.next = (evt, ctx, callback) => handler(evt, ctx, callback);
