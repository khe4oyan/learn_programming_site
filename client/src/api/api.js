// all server requests in there
import SERVER_ADDRESS from './serverConfig'

const serverReq = async (req) => {
	const r = await fetch(req);
	return await r.json();
}

const api = {
	getAllPostTypes() {
		return serverReq(`${SERVER_ADDRESS}/postTypes`);
	},
	getTrends() {
		return serverReq(`${SERVER_ADDRESS}/trends`);
	},
	getPostsList() {
		return serverReq(`${SERVER_ADDRESS}/postsList`);
	},
	getPostFromId(postId) {
		return serverReq(`${SERVER_ADDRESS}/post/${postId}`);
	},
	async getImage(imageName) {
		const r = await fetch(`${SERVER_ADDRESS}/img/${imageName}`);
		return URL.createObjectURL(await r.blob());
	}
};

export default api;