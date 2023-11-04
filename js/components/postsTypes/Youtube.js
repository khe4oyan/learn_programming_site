export default function Youtube(youtubeLink) {
	let YTBox = '<div class="youtube">';

	YTBox += `
		<iframe id="ytplayer" type="text/html" width="100%" height="inherit"
			src=${YTlink}
			frameborder="0">
		</iframe>
	`;

	YTBox += '</div>';
	return YTBox;
}