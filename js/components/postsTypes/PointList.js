import { DOM } from "../../tools/dom.js";

export default function PointList(dataList) {
	const pointList = DOM.CE('div', 'pointList');
	const ul = DOM.CE('ul', null, pointList);

	for (let i = 0; i < dataList.length; ++i) {
		const li = DOM.CE('li', 'li', ul);
		li.innerHTML = dataList[i];
	}

	return pointList;
}

/*
<div>
	<ul>
		{
			dataList.map((item, i) =>
				<li>{item}</li>
			)
		}
	</ul>
</div>
*/