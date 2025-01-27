import HeaderText from './postsTypes/HeaderText.js';
import Image from './postsTypes/Image.js';
import NumberList from './postsTypes/NumberList.js';
import Paragraph from './postsTypes/Paragraph.js';
import PointList from './postsTypes/PointList.js';
import Youtube from './postsTypes/Youtube.js';

class Compiler {
	#intermediateLines = [];
	#previewDOM = document.querySelector('.preview');
	#lineIndex = 0;

	constructor(intermediateLines) {
		this.#previewDOM.innerHTML = '';
		this.#titleCreate();
		this.#whiteSpaceDelete(intermediateLines);
		this.#checkingEveryLine();
		this.#showCode();
	}

	#titleCreate() {
		const h2 = document.createElement('h2');
		h2.classList.add('title');
		h2.innerText = document.querySelector('.postTitle').value;
		this.#previewDOM.appendChild(h2);
	}

	#whiteSpaceDelete(intermediateLines) {
		for (let i = 0; i < intermediateLines.length; ++i) {
			if (intermediateLines[i] === '') { continue; }
			this.#intermediateLines.push(intermediateLines[i]);
		}
	}

	#checkingEveryLine() {
		for (this.#lineIndex; this.#lineIndex < this.#intermediateLines.length; ++this.#lineIndex) {
			const i = this.#lineIndex;

			switch (this.#intermediateLines[i][0]) {
				case '#': { this.#textHeader(this.#intermediateLines[i].split('# ')[1]); break; }
				case '!': { this.#imgOrVid(this.#intermediateLines[i]); break; }
				case '-': { this.#list('-', NumberList, 'NL'); break; }
				case '*': { this.#list('*', PointList, 'PL'); break; }
				default: this.#paragraph();
			}
		}
	}

	#textHeader(text) {
		this.#append(HeaderText(text));
	}

	#imgOrVid(text) {
		text = text.split('!')[1];

		if (text.includes('.webp')) {
			this.#append(Image(text));
		} else {
			this.#append(Youtube(text));
		}
	}

	#list(char, component) {
		const list = [];

		do {
			list.push(this.#intermediateLines[this.#lineIndex].split(`${char} `)[1]);
			++this.#lineIndex;
		} while (this.#lineIndex < this.#intermediateLines.length && this.#intermediateLines[this.#lineIndex][0] === char);

		--this.#lineIndex;
		this.#append(component(list));
	}

	#paragraph() {
		const text = this.#intermediateLines[this.#lineIndex];
		let res = '';
		let i = 0;

		const linkCreate = () => {
			let a_title = '';
			let a_link = '';
			do {
				a_title += text[i++];
			} while (text[i] !== ']');
			++i;

			if (text[i] === '(') {
				++i;
				do {
					a_link += text[i++];
				} while (text[i] !== ')');
			}

			const done_link = `<a href="${a_link}">${a_title}</a>`;
			res += done_link;
		}

		for (i; i < text.length; ++i) {
			if (text[i] === '[') {
				++i;
				linkCreate();
			} else {
				res += text[i];
			}
		}

		this.#append(Paragraph(res));
	}

	#append(elem) {
		this.#previewDOM.innerHTML += elem;
	}

	#showCode() {
		const showCodeContainer = document.querySelector('.showCode');

		showCodeContainer.innerText = `
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<link rel="shortcut icon" href="assets/favicons/favicon-192.png" type="image/x-icon">
		<link rel="stylesheet" href="styles/index.css">
		<title>Սկսնակ ծրագրավորողի ուղեցույց</title>
	</head>
	<body>
		
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
		
		<div class="post">
			<div class="container">
				${this.#previewDOM.innerHTML}
			</div>
		</div>

		<footer class="footer">
			<div class="container">
				<div class="line_1">
					<p>Ուղեցույցը ստեղծվել և սիրով համալրվում է <a href='https://picsart.academy/' target='_blank'>Picsart Academy-ի կողմից</a></p>
					<div class="links">
						<a href="https://www.youtube.com/c/CodeRepublic" target="_blank"><svg id="youtube" viewBox="0 0 16 16" width="24"><path d="M15.333 6.473a5.667 5.667 0 00-.606-2.753 1.947 1.947 0 00-1.147-.667A52.241 52.241 0 008 2.847a52.299 52.299 0 00-5.56.2 1.913 1.913 0 00-.973.493c-.6.553-.667 1.5-.734 2.3a32.194 32.194 0 000 4.32c.02.45.087.897.2 1.333.08.337.243.649.474.907.271.269.617.45.993.52 1.437.177 2.885.25 4.333.22 2.334.033 4.38 0 6.8-.187.385-.065.741-.247 1.02-.52.187-.186.326-.415.407-.666a7.056 7.056 0 00.347-2.267c.026-.373.026-2.627.026-3.027zM6.493 9.9V5.773l3.947 2.074C9.333 8.46 7.873 9.153 6.493 9.9z"></path></svg></a>
						<a href="https://www.linkedin.com/company/picsart-academy/" target="_blank"><svg id="linkedin" viewBox="0 0 16 16" width="24" height="24"><path d="M13.647 1.333H2.353a.966.966 0 00-.98.954v11.426a.967.967 0 00.98.954h11.294a.967.967 0 00.98-.954V2.287a.968.968 0 00-.98-.954zm-8.254 11.16h-2v-6h2v6zm-1-6.84a1.04 1.04 0 010-2.08 1.047 1.047 0 110 2.08zm8.214 6.84h-2v-3.22c0-.806-.287-1.333-1.014-1.333a1.1 1.1 0 00-1.026.727 1.333 1.333 0 00-.067.486v3.334h-2v-6h2v.846a2 2 0 011.807-1c1.333 0 2.3.86 2.3 2.707v3.453z"/></svg></a>
						<a href="https://www.instagram.com/picsart.academy/" target="_blank"><svg id="instagram" viewBox="0 0 16 16" width="24" height="24"><path d="M11.56 3.53a.818.818 0 00-.444.13.782.782 0 00-.295.349.754.754 0 00.173.845.824.824 0 00.872.168.796.796 0 00.36-.286.76.76 0 00-.1-.98.813.813 0 00-.566-.226zm3.067 1.564a4.777 4.777 0 00-.307-1.57 3.186 3.186 0 00-.773-1.145 3.144 3.144 0 00-1.18-.743 5 5 0 00-1.62-.304c-.707-.04-.934-.04-2.747-.04-1.813 0-2.04 0-2.747.04a5 5 0 00-1.62.304c-.445.159-.848.413-1.18.743a3.03 3.03 0 00-.766 1.144 4.594 4.594 0 00-.314 1.571c-.04.685-.04.905-.04 2.664 0 1.758 0 1.978.04 2.663.012.537.118 1.068.314 1.57.162.434.425.825.766 1.145.332.33.735.584 1.18.744.519.19 1.066.292 1.62.303.707.04.934.04 2.747.04 1.813 0 2.04 0 2.747-.04a4.999 4.999 0 001.62-.303c.446-.158.85-.413 1.18-.744.341-.321.605-.712.773-1.144.19-.504.294-1.035.307-1.571 0-.685.04-.905.04-2.663 0-1.759 0-1.979-.04-2.664zm-1.2 5.25a3.53 3.53 0 01-.227 1.202 1.973 1.973 0 01-.5.743c-.216.214-.478.38-.767.485-.397.14-.816.215-1.24.22-.666.032-.913.039-2.666.039-1.754 0-2 0-2.667-.04a3.929 3.929 0 01-1.293-.193 2.184 2.184 0 01-.734-.485 1.934 1.934 0 01-.493-.743 3.488 3.488 0 01-.267-1.229c0-.646-.04-.885-.04-2.585s0-1.94.04-2.586c.003-.42.082-.836.234-1.229.117-.272.297-.516.526-.71.203-.223.453-.4.734-.518a3.927 3.927 0 011.266-.22c.667 0 .914-.038 2.667-.038 1.753 0 2 0 2.667.038.423.005.842.08 1.24.22.303.11.575.286.793.517.219.199.39.442.5.711.148.394.225.81.227 1.229.033.646.04.885.04 2.586 0 1.7-.007 1.939-.04 2.585zM8 4.44a3.496 3.496 0 00-1.898.562 3.34 3.34 0 00-1.257 1.49 3.223 3.223 0 00-.192 1.916c.133.642.46 1.233.938 1.696a3.455 3.455 0 001.75.906 3.52 3.52 0 001.976-.19 3.4 3.4 0 001.534-1.222 3.245 3.245 0 00-.426-4.19 3.423 3.423 0 00-1.113-.719A3.507 3.507 0 008 4.441zm0 5.47a2.27 2.27 0 01-1.233-.363 2.168 2.168 0 01-.818-.967 2.092 2.092 0 01-.126-1.243c.085-.418.297-.802.607-1.103.31-.3.706-.506 1.137-.589.43-.083.877-.04 1.283.123.405.163.752.439.996.793a2.107 2.107 0 01.205 2.02 2.15 2.15 0 01-.481.698c-.206.2-.451.358-.72.466A2.28 2.28 0 018 9.91z"/></svg></a>
					</div>
				</div>
				<p class="copyright">Picsart Academy © ${new Date().getFullYear()}, All rights reserved.</p>
			</div>
		</footer>
	</body>
</html>
		`;
	}
};

export default Compiler;