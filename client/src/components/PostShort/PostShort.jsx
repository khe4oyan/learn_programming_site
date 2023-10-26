import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import api from '../../api/api';

export default function PostShort({ data }) {
	const [imgLink, setImgLink] = useState('');

	const {
		id,
		title,
		img,
		textPreview
	} = data;

	useEffect(() => {
		api.getImage(img)
		.then(d => setImgLink(d));
	}, []);

	const styles = {
		background: `url(${imgLink}) center center / cover no-repeat`,
	}

	return (
		<div className='postShort'>
			<div className='postShort__titleBox'>
				<Link to={`/post/${id}`}>
					{title}
				</Link>
				<p className='postShort__titleBox__shortParagraph'>{textPreview}</p>
			</div>
			<div className='postShort__previewBox'>
				<div style={styles} className='postShort__preview'></div>
			</div>
		</div>
	)
}