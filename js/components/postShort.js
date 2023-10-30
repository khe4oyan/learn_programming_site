import { DOM } from "../tools/dom.js";
import { postTypes } from '../data/DB.js'

export function PostShort({ id, title, content }) {
	const elem = DOM.CE('div', 'postShort');
	let textPreview = '';
	let img = '';

	for (let i = 0; i < content.length; ++i) {
		if (content[i].type === postTypes.image) {
			img = content[i].content;
		}

		if (content[i].type === postTypes.paragraph) {
			textPreview = content[i].content;
		}
	}

	{
		const littleBox = DOM.CE('div', 'littleBox', elem);
		const link = DOM.link(`post.html?postId=${id}`, title);
		littleBox.appendChild(link);
		const shortParag = DOM.CE('p', 'shortParagraph', littleBox);
		shortParag.innerHTML = textPreview;
	}
	{
		const littleBox = DOM.CE('div', 'littleBox', elem);
		const previewImage = DOM.CE('div', null, littleBox);

		previewImage.style.background = `url(img/${img}) center center / cover no-repeat`;
		littleBox.appendChild(previewImage);
		previewImage.style.width = "100%";
		previewImage.style.height = "100%";
		previewImage.style.borderRadius = '4px';
		previewImage.style.overflow = 'hidden';
	}

	return elem;
}

/*
<div className='postShort'>
	<div className='postShort__titleBox'>
		<Link to={`/post/${id}`}>
			{title}
		</Link>
		<p className='postShort__titleBox__shortParagraph'>{textPreview}</p>
	</div>

	<div className='postShort__previewBox'>
		<div style={styles} className='postShort__preview'></div>
	</div>
</div>
*/