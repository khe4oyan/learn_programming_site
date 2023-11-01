import { DOM } from "../tools/dom.js";
import { PostShort } from "../components/postShort.js";
import { Header } from "../components/header.js";
import {DB} from '../data/DB.js'
import { academyBox } from "../components/academyBox.js";

{
	const headerDOM = Header('home');
	document.body.prepend(headerDOM);
	const homePageContainer = DOM.GE('.homePage .container');
	const academyDOM = academyBox();
	homePageContainer.appendChild(academyDOM);
	const homePostsDom = DOM.GE('.homePage .posts');

	for (let i = 0; i < DB.posts.length; ++i) {
		homePostsDom.appendChild(new PostShort(DB.posts[i]));
	}
}