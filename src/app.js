import { page } from './lib.js'
import { showForecastView } from './views/forecastView.js';
import { showHomeView } from './views/homeView.js';

page('/', showHomeView);
page('/PH1', () => console.error('PH1'));
page('/PH2', () => console.error('PH2'));
page('/forecast', showForecastView);

page.start()

function updateCtx(ctx, next){
    ctx
}