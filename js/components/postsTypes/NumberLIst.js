import { DOM } from "../../tools/dom.js";

export default function NumberList(dataList) {
	const numberList = DOM.CE('div', 'numberList');

	for (let i = 0; i < dataList.length; ++i) {
		const p = DOM.CE('p', 'line', numberList);
		p.innerHTML = `<span>${i + 1}.</span> ${dataList[i]}`;
	}

	return numberList;
}


/*
<div>
	{
		content.map((item, i) => 
			<p><span>{i}. </span> {item}</p>
		)
	}
</div>
*/