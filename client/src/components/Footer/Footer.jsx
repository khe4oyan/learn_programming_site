import React from 'react'
import './Footer.css'

export default function Footer() {
	return (
		<footer className='footer'>
			<p>©{new Date().getFullYear()} Picsart Academy</p>
			<p>Ուղեցույցը ստեղծվել և սիրով համալրվում է <a href='https://picsart.academy/' target='_blank'>Picsart Academy-ի կողմից</a>՝ հատուկ սկսնակների համար ❤️</p>
			{/* <div></div> */}
			<div>
				social media logo
			</div>
		</footer>
	)
}
