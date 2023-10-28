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
			<div className='container'>
				<div>
					<div className='homePage__trends'>
						{/* <h2>Trends</h2> */}
					</div>
					<div className='homePage__posts'>
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
				<div className='homePage__academyBox'>
					<div>
						<img className='homePage__academyBox__img' src="/assets/academyLogo.png" alt="academyLogo" />
						<h2 className='homePage__academyBox__title'>Picsart Academy</h2>
						<a className='homePage__academyBox__link' href="https://picsart.academy/" target='_blank'>Այցելել</a>
					</div>
				</div>
			</div>
		</div>
	)
}
