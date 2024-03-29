// import { render, html } from '../node_modules/lit-html/lit-html.js';
import {html, render} from 'https://esm.run/lit-html@1';
import page from '../node_modules/page/page.mjs';

const root = document.querySelector('main');

function renderer(templateResult) {
    render(templateResult, root);
}
export {
    renderer,
    html,
    page
}