import { DOM } from "../tools/dom.js";
import { PostShort } from "../components/postShort.js";
import { Header } from "../components/header.js";
import {DB} from '../data/DB.js'

/**
homePage
	container
		div
			posts
		academyBox
			academyBox-container
				img
				title
				link
*/

{
	const headerDOM = Header('home');
	const academyBoxDOM = DOM.GE('.homePage .academyBox');

	if (window.innerWidth < 1370) {
		headerDOM.children[0].appendChild(academyBoxDOM);
	} else {
		document.body.prepend(headerDOM);
	}

	document.body.prepend(headerDOM);
	const homePostsDom = DOM.GE('.homePage .posts');

	for (let i = 0; i < DB.posts.length; ++i) {
		homePostsDom.appendChild(new PostShort(DB.posts[i]));
	}
}