import { DOM } from '../tools/dom.js';
import HeaderText from '../components/postsTypes/HeaderText.js'
import Image from '../components/postsTypes/Image.js'
import NumberList from '../components/postsTypes/NumberLIst.js'
import PointList from '../components/postsTypes/PointList.js'
import Paragraph from '../components/postsTypes/Paragraph.js'
import Youtube from '../components/postsTypes/Youtube.js'
import { Header } from '../components/header.js';
import { DB, postTypes } from '../data/DB.js';

{
	document.body.prepend(Header('post'));
	const urlParams = new URLSearchParams(window.location.search);
	const postId = urlParams.get('postId');

	const posts = DOM.CE('div', 'post', document.body);
	const container = DOM.CE('div', ['container', 'post__container'], posts);

	const postTitle = DOM.CE('h2', 'post__title', container);
	postTitle.innerText = DB.posts[postId].title;

	const contentData = DB.posts[postId].content;

	for (let i = 0; i < contentData.length; ++i) {
		const { type, content } = contentData[i];

		switch (type) {
			case postTypes.headerText: { container.appendChild(HeaderText(content)); break; }
			case postTypes.youtube: { container.appendChild(Youtube(content)); break; }
			case postTypes.paragraph: { container.appendChild(Paragraph(content)); break; }
			case postTypes.image: { container.appendChild(Image(content)); break; }
			case postTypes.numberList: { container.appendChild(NumberList(content)); break; }
			case postTypes.pointList: { container.appendChild(PointList(content)); break; }
		}
	}
}