import { DOM } from "../../tools/dom.js";

export default function Youtube(youtubeLink) {
	const YTBox = DOM.CE('div', 'post__youtube');

	YTBox.innerHTML = DOM.YTframe(youtubeLink);

	return YTBox;
}


/*

<div>
	<iframe id="ytplayer" type="text/html" width="640" height="360"
		src={ data.content }
		frameborder="0">
	</iframe>
</div>

*/