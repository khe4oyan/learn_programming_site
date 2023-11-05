export default function PointList(dataList) {
	let pointList = '<div class="pointList"><ul>';

	for (let i = 0; i < dataList.length; ++i) {
		pointList += `<li>${dataList[i]}</li>`;
	}

	pointList += '</ul></div>';
	return pointList;
}