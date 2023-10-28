import { DOM } from "../tools/dom.js";
import { PostShort } from "../components/postShort.js";
import api from "../api/api.js";

{
	const homePostsDom = DOM.GE('.homePage__posts');
	api.getPostsList()
	.then(postsList => {
		for (let i = 0; i < postsList.length; ++i) {
			homePostsDom.appendChild(new PostShort(postsList[i]));
		}
	})
}