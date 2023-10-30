import { DOM } from "../tools/dom.js";
import { PostShort } from "../components/postShort.js";
import api from "../api/api.js";
import { Header } from "../components/header.js";

{
	const headerDOM = Header('home');
	const academyBoxDOM = DOM.GE('.homePage__academyBox');

	if (window.innerWidth < 1370) {
		headerDOM.children[0].appendChild(academyBoxDOM);
	} else {
		document.body.prepend(headerDOM);
	}

	document.body.prepend(headerDOM);
	const homePostsDom = DOM.GE('.homePage__posts');
	api.getPostsList()
	.then(postsList => {
		for (let i = 0; i < postsList.length; ++i) {
			homePostsDom.appendChild(new PostShort(postsList[i]));
		}
	})
}