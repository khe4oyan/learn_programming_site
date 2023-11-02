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
		
	}

	#append(elem, data) {
		this.#previewDOM.appendChild(elem);
		this.#convertedDataType.push(data);
	}
};

export default Compiler;