import { page } from './lib.js'
import { showForecastView } from './views/forecastView.js';
import { showHomeView } from './views/homeView.js';

page('/', showHomeView);
page('/about', () => console.error('About'));
page('/contact', () => console.error('Contact'));
page('/forecast', showForecastView);

page.start()

function updateCtx(ctx, next){
    ctx
}