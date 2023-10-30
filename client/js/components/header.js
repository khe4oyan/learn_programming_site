import { DOM } from "../tools/dom.js";

export function Header(headerPath) {
	const headerDOM = DOM.CE('header', 'header');
	const container = DOM.CE('div', ['center', 'container', 'header__container'], headerDOM);

	{
		const leftSideBox = DOM.CE('div', ['center', 'leftSideBox'], container);

		const logo = DOM.img('assets/favicons/favicon-512.png', 'logo', 'header__container__logo');
		leftSideBox.appendChild(logo);

		const headerText = DOM.CE('h2', 'header__container__logo__text', leftSideBox);
		if (headerPath === 'home') {
			headerText.innerText = 'Սկսնակ ծրագրավորողի ուղեցույց';
		} else if (headerPath === 'post') {
			headerText.innerHTML = 'Տեսնել բոլոր հոդվածները';
			headerText.classList.add('clickableText');
			headerText.addEventListener('click', () => {
				window.history.back();
			});
		}
	}

	{
		// const input = DOM.CE('input', 'header__container__search', container);
		// input.type = 'search';
		// input.placeholder = 'Search';
	}

	return headerDOM;
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