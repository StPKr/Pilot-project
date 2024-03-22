import { render, html } from '../node_modules/lit-html/lit-html.js';
import { classMap } from '../node_modules/lit-html/directives/class-map.js'
import page from '../node_modules/page/page.mjs';

const root = document.querySelector('main');

function renderer(templateResult) {
    render(templateResult, root);
}
export {
    renderer,
    html,
    classMap,
    page
}