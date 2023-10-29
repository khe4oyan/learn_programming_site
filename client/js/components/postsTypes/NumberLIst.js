import { DOM } from "../../tools/dom.js";

export default function NumberList(dataList) {
	const numberList = DOM.CE('div', 'numberList');

	for (let i = 0; i < dataList.length; ++i) {
		const p = DOM.CE('p', 'numberList_line', numberList);
		p.innerHTML = `${i}. ${dataList[i]}`;
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