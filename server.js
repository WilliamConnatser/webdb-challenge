const express = require('express');
const projectsRouter = require('./projectsRouter');
const actionsRouter = require('./actionsRouter');
const server = express();

server.use(express.json());
server.use(`/api/projects`, projectsRouter);
server.use(`/api/actions`, actionsRouter);

server.get('/', (req, res) => {
    res.status(200).send('I feel so alive')
});

module.exports = server;