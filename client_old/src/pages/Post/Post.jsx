import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../api/api'
import HeaderText from '../../components/postsTypes/HeaderText'
import Youtube from '../../components/postsTypes/Youtube'
import Paragraph from '../../components/postsTypes/Paragraph'
import Image from '../../components/postsTypes/Image'
import NumberList from '../../components/postsTypes/NumberLIst'
import PointList from '../../components/postsTypes/PointList'

export default function Post({ postTypes }) {
	const [postData, setPostData] = useState(null);
	const { postId } = useParams();

	useEffect(() => {
		api.getPostFromId(postId)
			.then(d => setPostData(d));
	}, []);

	return (
		<div className='postPage'>
			{
				postData &&
				<div className="container">
					<h2>{postData?.title}</h2>
					<div>
						{
							postData.content.map((item, i) => 
								<React.Fragment key={`postData_key_${i}`}>
									{item.type === postTypes.headerText && <HeaderText data={item} />}
									{item.type === postTypes.youtube && <Youtube data={item} />}
									{item.type === postTypes.paragraph && <Paragraph data={item} />}
									{item.type === postTypes.image && <Image data={item} />}
									{item.type === postTypes.numberList && <NumberList data={item} />}
									{item.type === postTypes.pointList && <PointList data={item} />}
								</React.Fragment>
							)
						}
					</div>
				</div>
			}
		</div>
	)
}


/*

headerText
youtube
paragraph
image
numberList
pointList

*/