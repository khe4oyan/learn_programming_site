import React, { useEffect, useState } from 'react'
import api from '../../api/api';
import PostShort from '../../components/PostShort/PostShort'

export default function Home() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		api.getPostsList()
		.then(d => setPosts(d));
	}, []);

	return (
		<div className='homePage'>
			<div className='homePage__trends container'>
				{/* <h2>Trends</h2> */}
			</div>
			<div className='homePage__posts container'>
				{
					posts.map((item, i) => 
						<PostShort 
							key={`postShort_key${i}`}
							data={item}
						/>
					)
				}
			</div>
		</div>
	)
}
