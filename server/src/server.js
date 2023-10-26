const express = require('express');
const cors = require('cors');
const { DB, postTypes } = require('./DB');
const path = require('path'); // Добавьте импорт для модуля path
const server = express();
const port = 5000;

server.use(cors());
server.use(express.static(path.join(__dirname, 'public')));

const shortPostCreate = (postsList) => {
	const result = [];

	for (let i = 0; i < postsList.length; ++i) {
		const post = {
			id: i,
			title: postsList[i].title,
			img: '',
			textPreview: '',
		};

		let imgFond = false;
		let paragFond = false;

		for (let j = 0; j < postsList[i].content.length; ++j) {
			if(postsList[i].content[j].type === postTypes.image) {
				post.img = postsList[i].content[j].content;
				imgFond = true;
			}
			if(postsList[i].content[j].type === postTypes.paragraph) {
				post.textPreview = postsList[i].content[j].content;
				paragFond = true;
			}

			if (imgFond && paragFond) {
				break;
			}
		}

		result.push(post);
	}

	return result;
}

server.get('/postTypes', (_, res) => {
	res.send(JSON.stringify(postTypes));
});

server.get('/trends', (_, res) => {
	res.send(JSON.stringify(shortPostCreate(DB.trends)));
});

server.get('/postsList', (_, res) => {
	res.send(JSON.stringify(shortPostCreate(DB.posts)));
});

server.get('/post/:postId', (req, res) => {
	res.send(JSON.stringify(DB.posts[req.params.postId]));
});

server.get('/img/:imgName', async (req, res) => {
	// const imageName = req.params.imgName;
	// res.send(__dirname + `/public/img/${imageName}`);

	const imageName = req.params.imgName;
  const imagePath = path.join(__dirname, 'public/img', imageName);
  res.sendFile(imagePath);
});

server.listen(port, () => {
	console.clear();
	console.log('Server started on', port, 'port');
});