import { page } from './lib.js'
import { clearUserData, updateNav } from './util.js';
import { showForecastView } from './views/forecastView.js';
import { showHomeView } from './views/homeView.js';

page('/', showHomeView);
page('/login', () => alert('I do nothing yet'));
page('/register', () => alert('I also do nothing yet...'));
page('/dashboard', () => alert('I also do nothing yet...'));
page('/addFavourite', () => alert('I also do nothing yet...'));
page('/profile', () => alert('I also do nothing yet...'));
page('/forecast', showForecastView);

page.start();
updateNav();

document.querySelector('a[data-id="logoutBtn"]').addEventListener('click', async () => {
    await clearUserData();
    updateNav();
    page.redirect('/');
});