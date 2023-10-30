import { DOM } from "../../tools/dom.js";

export default function Image(imgName) {
	const imageBox = DOM.CE('div', 'post__image');
	const img = DOM.img('', 'post_img', 'post__image__img', imageBox);
	img.src = `img/${imgName}`;

	return imageBox;
}

/* 
<div>
	<img src={ imageLink } alt="post_image" />
</div> 
*/