import HeaderText from '../../components/postsTypes/HeaderText.js'
import Image from '../../components/postsTypes/Image.js'
import NumberList from '../../components/postsTypes/NumberList.js'
import Paragraph from '../../components/postsTypes/Paragraph.js'
import PointList from '../../components/postsTypes/PointList.js'
import Youtube from '../../components/postsTypes/Youtube.js'

class Tool {
	constructor() { throw new Error('not instance'); }
	
	static createPreview(previewData, postTypes) {
		const elem = DOM.CE('div');

		let apenedElem = null;

		console.log(previewData.type);
		switch (previewData.type) {
			case postTypes.headerText: { apenedElem = HeaderText(previewData.content); break; }
			case postTypes.image: { apenedElem = Image(previewData.content); break; }
			case postTypes.numberList: { apenedElem = NumberList(previewData.content); break; }
			case postTypes.paragraph: { apenedElem = Paragraph(previewData.content); break; }
			case postTypes.pointList: { apenedElem = PointList(previewData.content); break; }
			case postTypes.youtube: { apenedElem = Youtube(previewData.content); break; }
		}

		elem.appendChild(apenedElem);

		return elem;
	}
};

export default Tool;