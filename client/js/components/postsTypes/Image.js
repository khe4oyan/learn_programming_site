import api from "../../api/api.js";
import { DOM } from "../../tools/dom.js";


export default function Image(imgName) {
	const imageBox = DOM.CE('div', 'post__image');
	const img = DOM.img('', 'post_img', 'post__image__img', imageBox);

	api.getImage(imgName)
	.then(imgLink => {
		img.src = imgLink;
	});

	return imageBox;
}

/* 
<div>
	<img src={ imageLink } alt="post_image" />
</div> 
*/