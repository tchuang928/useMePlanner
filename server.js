import config from './config';
import fs from 'fs';
import express from 'express';

const server = express();
server.set('views', __dirname);

//.use() mounts a specified middleware
server.use(express.static(__dirname));

// returns content of root level
server.get('/', (req, res) => {
	res.sendFile('/index.html');
});

// static middleware to serve static assets
// better options out there-- should usually separately handle static assets outside of node

server.listen(config.port, () => {
	console.info(`Express listening on port ${config.port}`);
});
