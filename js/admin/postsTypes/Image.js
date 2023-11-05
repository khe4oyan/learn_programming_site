export default function Image(imgName) {
	return `
		<div class="image">
			<img src="img/${imgName}" alt="post_image" class="img" />
		</div> 
	`;
}