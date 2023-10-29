import { DOM } from "../../tools/dom.js";

export default function Paragraph(data) {
	const p = DOM.CE('p', 'post__paragraph');
	p.innerText = data;
	return p;
}