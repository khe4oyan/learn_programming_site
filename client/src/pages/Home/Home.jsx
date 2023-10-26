import React, { useEffect, useState } from 'react'
import api from '../../api/api';
import PostShort from '../../components/PostShort/PostShort'

export default function Home() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		// setPosts(api.getPostsList());
	}, []);

	return (
		<div>
			{
				posts.map((item, i) => 
					<PostShort 
						key={`postShort_key${i}`}
						data={item}
					/>
				)
			}
		</div>
	)
}
