import { DOM } from "../../tools/dom.js";

export default function Paragraph(data) {
	console.log(data);
	const p = DOM.CE('p', 'paragraph');
	p.innerHTML = data;
	return p;
}
