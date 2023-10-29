import api from '../api/api.js'
import { DOM } from '../tools/dom.js';
import HeaderText from '../components/postsTypes/HeaderText.js'
import Image from '../components/postsTypes/Image.js'
import NumberList from '../components/postsTypes/NumberLIst.js'
import PointList from '../components/postsTypes/PointList.js'
import Paragraph from '../components/postsTypes/Paragraph.js'
import Youtube from '../components/postsTypes/Youtube.js'


{
	const urlParams = new URLSearchParams(window.location.search);
	const postId = urlParams.get('postId');

	const posts = DOM.CE('div', 'post', document.body);

	api.getPostFromId(postId)
		.then(postData => {
			const postTitle = DOM.CE('h2', 'post__title', posts);
			postTitle.innerText = postData.title;

			api.getAllPostTypes()
				.then(allPostTypes => {
					const contentData = postData.content;
					for (let i = 0; i < contentData.length; ++i) {
						const { type, content } = contentData[i];

						switch (type) {
							case allPostTypes.headerText: { posts.appendChild(HeaderText(content)); break; }
							case allPostTypes.youtube: { posts.appendChild(Youtube(content)); break; }
							case allPostTypes.paragraph: { posts.appendChild(Paragraph(content)); break; }
							case allPostTypes.image: { posts.appendChild(Image(content)); break; }
							case allPostTypes.numberList: { posts.appendChild(NumberList(content)); break; }
							case allPostTypes.pointList: { posts.appendChild(PointList(content)); break; }
						}
					}
				})
		});
}