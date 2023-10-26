import fakeDB from "./fakeDB";
// all servers requests in there

const api = {
	getPostsList() {
		const posts = [];
		return [];
		for (let i = 0; i < fakeDB.posts.length; ++i) {
			posts.push({id: i, title: fakeDB.posts[i].title});
		}

		return posts;
	},
	getPostFromId(postId) {
		// return fakeDB.posts[postId];
	},
};

export default api;