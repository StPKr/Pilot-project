import { html, renderer } from "../lib.js";
import { result } from "./homeView.js";

const forecastTemp = ( date) => html`
<div class="container" id="current-day">
    <h2>Your location</h2>
    <p>${result.name} - ${result.sys.country}</p>
</div>
<div class="container" id="recipe">
    <h2>Current date</h2>
    <p>${date}</p>
</div>
<div class="container" id="ingredients">
    <h2>Weather</h2>
    <p>${(result.main.temp -272.15).toFixed(2)} C</p>
</div>
`;

export function showForecastView(ctx) {
    const rawDate = new Date();
    const date = rawDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    renderer(forecastTemp( date));
}