import React, { useEffect, useState } from 'react'
import api from '../../api/api'

export default function Image({ data }) {
	const [imageLink, setImageLink] = useState(null);

	useEffect(() => {
		api.getImage(data.content)
		.then(d => setImageLink(d));
	}, []);

	return (
		<div>
			<img src={ imageLink } alt="post_image" />
		</div>
	)
}
