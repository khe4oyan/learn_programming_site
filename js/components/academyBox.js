import { DOM } from "../tools/dom.js";

export function academyBox() {
    const academyBox = DOM.CE('div', 'academyBox');
    const container = DOM.CE('div', 'academyBox-container', academyBox);

    const img = DOM.img('assets/academyLogo.png', 'academy_logo', 'img', container);

    const title = DOM.CE('h2', 'title', container);
    title.innerText = 'Picsart Academy';

    const link = DOM.link('https://picsart.academy/', 'Այցելել','_blank', container);
    link.classList.add('link');

    return academyBox;
}