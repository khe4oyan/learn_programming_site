import api from '../api/api.js'
import { DOM } from '../tools/dom.js';

{
	const urlParams = new URLSearchParams(window.location.search);
	const postId = urlParams.get('postId');
	
	api.getPostFromId(postId)
	.then(postData => {
		const posts = DOM.CE('div', 'post');
		const postTitle = DOM.CE('h2', );
	});
}