import config from './config';
import fs from 'fs';
import express from 'express';

const server = express();

// returns content of root level
server.get('/', (req, res) => {
	fs.readFile('./index.html', (err, data) => {
		res.send(data.toString());
	});
});

// static middleware to serve static assets
// better options out there-- should usually separately handle static assets outside of node
server.use(express.static('public'));

server.listen(config.port, () => {
	console.info(`Express listening on port ${config.port}`);
});
