import { login } from '../data/users.js';
import { html, renderer, page } from '../lib.js';
import { createSubmitHandler, updateNav } from '../util.js';


const loginTemplate = (onLogin) => html`
<section id="login">
    <div class="form">
        <h2>Login</h2>
        <form class="login-form" @submit=${onLogin}>
            <input type="text" name="username" id="username" placeholder="Username" />
            <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
            />
            <button type="submit">Login</button>
            <p class="message">
            Not registered? <a href="/register">Create an account</a>
            </p>
        </form>
    </div>
</section>
`;

export function showLoginView(ctx) {
    renderer(loginTemplate(createSubmitHandler(onLogin)));
}

async function onLogin({ username, password }, form) {
    if (!username || !password) {
        return;
    }

    await login(username, password);
    updateNav();
    page.redirect('/');
}