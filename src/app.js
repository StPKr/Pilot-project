import { page } from './lib.js'
import { updateNav } from './util.js';
import { showForecastView } from './views/forecastView.js';
import { onRandom, showHomeView } from './views/homeView.js';

page('/', showHomeView);
page('/PH1', () => alert('PH1 - I do nothing yet'));
page('/PH2', () => alert('PH2 - I also do nothing yet...'));
page('/forecast', showForecastView);
page('/random', onRandom);
page('/register', () => console.error('register'));
page('/login', () => console.error('login'));



page.start()
updateNav();
