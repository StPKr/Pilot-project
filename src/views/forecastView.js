import { html, renderer } from "../lib.js";

const forecastTemp = (location, date, weather) => html`
<div class="container" id="current-day">
    <h2>Your location</h2>
    <p>${location}</p>
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
    console.log(ctx)
    debugger
    const location = 'PH 1';
    const date = 'PH 2';
    const weather = 'PH 3';
    renderer(forecastTemp(location, date, weather));
}