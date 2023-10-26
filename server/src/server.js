const express = require('express');
const cors = require('cors');
const { DB, postTypes } = require('./DB');
const server = express();
const port = 5000;

server.use(cors());
server.use(express.static('public'));

const shortPostCreate = (postsList) => {
	const result = [];

	for (let i = 0; i < postsList.length; ++i) {
		result.push({id: i, title: postsList[i].title});
	}

	return result;
}

server.get('/postTypes', (_, res) => {
	res.send(JSON.stringify(postTypes));
});

server.get('/trends', (_, res) => {
	res.send(JSON.stringify(shortPostCreate(DB.trends)));
});

server.get('/postsTitles', (_, res) => {
	res.send(JSON.stringify(shortPostCreate(DB.posts)));
});

server.get('/post/:postId', (req, res) => {
	res.send(JSON.stringify(DB.posts[req.params.postId]));
});

server.get('/img/:imgName', (req, res) => {
	const imageName = req.params.imgName;
  res.sendFile(__dirname + `/public/img/${imageName}`);
});

server.listen(port, () => {
	console.clear();
	console.log('Server started on', port, 'port');
});