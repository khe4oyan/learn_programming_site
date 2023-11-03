import HeaderText from '../../components/postsTypes/HeaderText.js'
import Image from '../../components/postsTypes/Image.js'
import NumberList from '../../components/postsTypes/NumberList.js'
import Paragraph from '../../components/postsTypes/Paragraph.js'
import PointList from '../../components/postsTypes/PointList.js'
import Youtube from '../../components/postsTypes/Youtube.js'
import {DB} from '../../data/DB.js';

class Compiler {
	#intermediateLines = [];
	#convertedDataType = [];
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
			
			switch(this.#intermediateLines[i][0]) {
				case '#': { this.#textHeader(this.#intermediateLines[i].split('# ')[1]); break;}
				case '!': { this.#imgOrVid(this.#intermediateLines[i]); break;}
				case '-': { this.#list('-', NumberList, 'NL'); break;}
				case '*': { this.#list('*', PointList, 'PL'); break;}
				default: this.#paragraph();
			}
		}
	}

	#textHeader(text) {
		this.#append(HeaderText(text), `HT('${text}')`);
	}

	#imgOrVid(text) {
		text = text.split('!')[1];

		if (text.includes('.webp')) {
			this.#append(Image(text), `IMG('${text}')`);
		} else {
			this.#append(Youtube(text), `YT('${text}')`);
		}
	}

	#list(char, component, listFunctionName) {
		const list = [];

		do {
			list.push(this.#intermediateLines[this.#lineIndex].split(`${char} `)[1]);
			++this.#lineIndex;
		}while(this.#lineIndex < this.#intermediateLines.length && this.#intermediateLines[this.#lineIndex][0] === char);

		--this.#lineIndex;
		this.#append(component(list), `${listFunctionName}(${JSON.stringify(list)})`);
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
			}while(text[i] !== ']');
			++i;
			
			if (text[i] === '(') {
				++i;
				do {
					a_link += text[i++];
				}while(text[i] !== ')');
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

		this.#append(Paragraph(res), `PR(\`${res}\`)`);
	}

	#append(elem, data) {
		this.#previewDOM.appendChild(elem);
		this.#convertedDataType.push(data);
	}

	#showCode() {
		const showCodeContainer = document.querySelector('.showCode');
		showCodeContainer.innerHTML = '';

		const input = document.querySelector('.postTitle');
		showCodeContainer.innerHTML += `{\n\t\tid: ${DB.posts.length} , title: "${input.value}", content: [\n`

		for (let i = 0; i < this.#convertedDataType.length; ++i) {
			showCodeContainer.innerText += '\t\t' + this.#convertedDataType[i] + ',\n';
		}

		showCodeContainer.innerHTML += ']},';
	}
};

export default Compiler;