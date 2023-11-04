export default function NumberList(dataList) {
	let numberList = '<div class="numberList">';

	for (let i = 0; i < dataList.length; ++i) {
		numberList += `<p class="line"><span>${i + 1}.</span> ${dataList[i]}</p>`;
	}

	numberList += '</div>';
	return numberList;
}