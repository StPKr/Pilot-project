import { html, renderer } from "../lib.js";

const testTemplate = () => html`
<div>
    <h1>RANDOM TEXT</h1>
</div>
`;

export function testFunc(ctx){
    renderer(testTemplate());
}
