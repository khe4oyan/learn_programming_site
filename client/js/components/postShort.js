import api from '../api/api.js'
import { DOM } from "../tools/dom.js";

export
	function PostShort({ id, title, img, textPreview }) {
	const elem = DOM.CE('div', 'postShort');
	{
		const littleBox = DOM.CE('div', 'postShort__titleBox', elem);
		const link = DOM.link(`post.html?postId=${id}`, title);
		littleBox.appendChild(link);
		const shortParag = DOM.CE('p', 'postShort__titleBox__shortParagraph', littleBox);
		shortParag.innerText = textPreview;
	}
	{
		const littleBox = DOM.CE('div', 'postShort__titleBox', elem);
		const previewImage = DOM.CE('div', null, littleBox);
		api.getImage(img)
			.then(imgLink => {
				previewImage.style.background = `url(${imgLink}) center center / cover no-repeat`;
				littleBox.appendChild(previewImage);
				previewImage.style.width = "100%";
				previewImage.style.height = "100%";
				previewImage.style.borderRadius = '4px';
				previewImage.style.overflow = 'hidden';
			});
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