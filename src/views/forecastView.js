import { html, renderer } from "../lib.js";
import { city } from "./homeView.js";

const forecastTemp = ( date, weather) => html`
<div class="container" id="current-day">
    <h2>Your location</h2>
    <p>${city}</p>
</div>
<div class="container" id="recipe">
    <h2>Current date</h2>
    <p>${date}</p>
</div>
<div class="container" id="ingredients">
    <h2>Weather</h2>
    <p>${weather}</p>
</div>
`;

export function showForecastView(ctx) {
    const rawDate = new Date();
    const date = rawDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    const weather = 'PH 3';
    renderer(forecastTemp( date, weather));
}