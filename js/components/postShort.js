
// export function PostShort({ id, title, content }) {
// 	const elem = DOM.CE('div', 'postShort');
// 	let textPreview = '';
// 	let img = '';

// 	for (let i = 0; i < content.length; ++i) {
// 		if (content[i].type === postTypes.image) {
// 			img = content[i].content;
// 		}

// 		if (content[i].type === postTypes.paragraph) {
// 			textPreview = content[i].content;
// 		}
// 	}

// 	{
// 		const littleBox = DOM.CE('div', 'littleBox', elem);
// 		const link = DOM.link(`post.html?postId=${id}`, title);
// 		littleBox.appendChild(link);
// 		const shortParag = DOM.CE('p', 'shortParagraph', littleBox);
// 		shortParag.innerHTML = textPreview;
// 	}
// 	{
// 		const littleBox = DOM.CE('div', 'littleBox', elem);
// 		const previewImage = DOM.CE('div', null, littleBox);

// 		previewImage.style.background = `url(img/${img}) center center / cover no-repeat`;
// 		littleBox.appendChild(previewImage);
// 		previewImage.style.width = "100%";
// 		previewImage.style.height = "100%";
// 		previewImage.style.borderRadius = '4px';
// 		previewImage.style.overflow = 'hidden';
// 	}

// 	return elem;
// }

// /*
// <div className='postShort'>
// 	<div className='postShort__titleBox'>
// 		<Link to={`/post/${id}`}>
// 			{title}
// 		</Link>
// 		<p className='postShort__titleBox__shortParagraph'>{textPreview}</p>
// 	</div>

// 	<div className='postShort__previewBox'>
// 		<div style={styles} className='postShort__preview'></div>
// 	</div>
// </div>
// */



export function PostShort({ id, title, content }) {
	let elem = `
		<div class="postShort">
			<div class="littleBox">
				<a href="#">(change link name)</a>
				<p class="shortParagraph">(change text)</p>
			</div>
			<div class="littleBox">
				<div style="background: url(img/image.webp) center center / cover no-repeat; width: 100%; height: 100%; border-radius: 4px; overflow: hidden;"></div>
			</div>
		</div>
	`;

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