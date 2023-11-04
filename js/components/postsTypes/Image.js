export default function Image(imgName) {
	console.log(imgName);
	return `
		<div>
			<img src="img/${imgName}" alt="post_image" />
		</div> 
	`;
}