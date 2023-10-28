export class DOM {
	static #classList(classList, element) {
		if (classList === null) { return; }
		if (Array.isArray(classList)) {
			for (let i = 0; i < classList.length; ++i) {
				element.classList.add(classList[i]);
			}
		} else {
			element.classList.add(classList);
		}
	}

	static CE(elementName, classData = null, parrent = null) {
		const element = document.createElement(elementName);
		this.#classList(classData, element);
		parrent && parrent.appendChild(element);

		return element;
	}

	static img(src, alt, classData) {
		const img = new Image();
		img.src = src;
		img.alt = alt;
		this.#classList(classData, img);

		return img;
	}

	static link(href, linkText, target = null) {
		const a = document.createElement('a');
		a.href = href;
		a.innerHTML = linkText;
		target && (a.target = target);
		
		return a;
	}
	
	static GE(elementName) {
		return document.querySelector(elementName);
	}
}