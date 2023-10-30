import { DOM } from "../../tools/dom.js";

export default function HeaderText(headerData) {
	const headerText = DOM.CE('div', 'post__headerText');
	const h3 = DOM.CE('h3', null, headerText);
	h3.innerText = headerData;
	return headerText;
}

/* 
<div class="headerText">
	<h3>{headerText}</h3>
</div>  
*/