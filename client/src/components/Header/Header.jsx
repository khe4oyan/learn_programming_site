import React from 'react'

export default function Header() {
	return (
		<header className='header'>
			<div className='container center'>
				<div className='center'>
					<img className='header__logo' src="/assets/logo.png" alt="logo" />
					<h2 className='header__logo__text'>Learn Programming</h2>
				</div>
				<input className='header__search' type="search" placeholder='Search' />
			</div>
		</header>
	)
}