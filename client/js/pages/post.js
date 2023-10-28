import api from '../api/api.js'
import { DOM } from '../tools/dom.js';

{
	const urlParams = new URLSearchParams(window.location.search);
	const postId = urlParams.get('postId');
	
	api.getPostFromId(postId)
	.then(postData => {
		console.log(postData);
	});
}