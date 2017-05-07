import config from './config';
import fs from 'fs';
import express from 'express';
import path from 'path';

const server = express();
server.set('views', __dirname);

server.use(express.static(__dirname));

// returns content of root level
server.get('/', (req, res) => {
	//res.send(path.join(__dirname+'/index.html'));
	res.sendFile('/index.html');
});

// static middleware to serve static assets
// better options out there-- should usually separately handle static assets outside of node

server.listen(config.port, () => {
	console.info(`Express listening on port ${config.port}`);
});
