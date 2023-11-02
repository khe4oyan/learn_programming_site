import HeaderText from '../../components/postsTypes/HeaderText.js'
import Image from '../../components/postsTypes/Image.js'
import NumberList from '../../components/postsTypes/NumberList.js'
import Paragraph from '../../components/postsTypes/Paragraph.js'
import PointList from '../../components/postsTypes/PointList.js'
import Youtube from '../../components/postsTypes/Youtube.js'

class Compiler {
	#intermediateLines = [];
	#convertedDataType = [];
	#previewDOM = document.querySelector('.preview');
	#lineIndex = 0;

	constructor(intermediateLines) {
		this.#previewDOM.innerHTML = '';
		this.#whiteSpaceDelete(intermediateLines);
		this.#checkingEveryLine();
		this.#showCode();
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
				case '-': { this.#list('-', NumberList); break;}
				case '*': { this.#list('*', PointList); break;}
				default: this.#paragraph();
			}
		}
	}

	#textHeader(text) {
		this.#append(HeaderText(text), `HT('${text}')`);
	}

	#imgOrVid(text) {
		text = text.split('!')[1];

		if (text.includes('.png')) {
			this.#append(Image(text), `IMG('${text}')`);
		} else {
			this.#append(Youtube(text), `YT('${text}')`);
		}
	}

	#list(char, component) {
		const list = [];

		do {
			list.push(this.#intermediateLines[this.#lineIndex].split(`${char} `)[1]);
			++this.#lineIndex;
		}while(this.#lineIndex < this.#intermediateLines.length && this.#intermediateLines[this.#lineIndex][0] === char);

		this.#append(component(list), 'change');
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

		this.#append(Paragraph(res), `PR("${res}")`);
	}

	#append(elem, data) {
		this.#previewDOM.appendChild(elem);
		this.#convertedDataType.push(data);
	}

	#showCode() {
		console.log(this.#convertedDataType);
		const showCodeContainer = document.querySelector('.showCode');
		showCodeContainer.innerHTML = '';

		for (let i = 0; i < this.#convertedDataType.length; ++i) {
			const p = document.createElement('p');
			p.innerText = this.#convertedDataType[i];
			showCodeContainer.appendChild(p);
		}
	}
};

export default Compiler;