import { DOM } from "../tools/dom.js";

{
	const headerDOM = DOM.CE('header', 'header');
	const container = DOM.CE('div', ['center', 'container'], headerDOM);

	{
		const leftSideBox = DOM.CE('div', 'center', container);

		const logo = DOM.img('assets/logo.png', 'logo', 'header__logo');
		leftSideBox.appendChild(logo);

		const headerText = DOM.CE('h2', 'header__logo__text', leftSideBox);
		headerText.innerText = 'Learn Programming';
	}

	{
		const input = DOM.CE('input', 'header__search', container);
		input.type = 'search';
		input.placeholder = 'Search';
	}

	document.body.prepend(headerDOM);
}

/*
	<header className='header'>
		<div className='container center'>
			<div className='center'>
				<img className='header__logo' src="/assets/logo.png" alt="logo" />
				<h2 className='header__logo__text'>Learn Programming</h2>
			</div>
			<input className='header__search' type="search" placeholder='Search' />
		</div>
	</header>
*/