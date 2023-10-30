import { DOM } from "../tools/dom.js";
import { PostShort } from "../components/postShort.js";
import { Header } from "../components/header.js";
import {DB} from '../data/DB.js'

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

	for (let i = 0; i < DB.posts.length; ++i) {
		homePostsDom.appendChild(new PostShort(DB.posts[i]));
	}
}