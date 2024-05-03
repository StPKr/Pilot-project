import { html, page } from './lib.js'
import { clearUserData, updateNav } from './util.js';
import { showForecastView } from './views/forecastView.js';
import { showHomeView } from './views/homeView.js';
import { showLoginView } from './views/loginView.js';
import { showRegisterView } from './views/registerView.js';
import { testFunc } from './views/test.js';

page('/', showHomeView);
page('/login', showLoginView);
page('/register', showRegisterView);
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