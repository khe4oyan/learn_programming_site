function header() {
	let header = `
		<header class="header">
			<div class="container center">
				<div class="leftSideBox center"> 
					<img src="assets/favicons/favicon-512.png" class="logo" alt="logo" >
					<a class="text" href="index.html">Տեսնել բոլոր հոդվածները</a>
				</div>
				<div class="academyBox">
					<div class="academyBox-container">
						<img src="assets/academyLogo.png" alt="academy_logo" class="img">
						<a href="https://picsart.academy/" target="_blank" class="link">Այցելել</a>
					</div>
				</div>
			</div>
		</header>
	`;

	// 	headerText.addEventListener('click', () => {
	// 		window.history.back();
	// 	});

	return header;
}

export default header;