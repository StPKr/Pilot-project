import { register } from '../data/users.js';
import { html, renderer, page } from '../lib.js';
import { createSubmitHandler, updateNav } from '../util.js';


const registerTemplate = (onRegister) => html`
<section id="register">
    <div class="form">
        <h2>Register</h2>
        <form class="register-form" @submit=${onRegister}>
            <input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
            />
            <input
                type="text"
                name="email"
                id="register-email"
                placeholder="Email"
            />
            <input
                type="password"
                name="password"
                id="register-password"
                placeholder="Password"
            />
            <input
                type="password"
                name="re-password"
                id="repeat-password"
                placeholder="Repeat password"
            />
            <button type="submit">Register</button>
            <p class="message">Already registered? <a href="/login">Login</a></p>
        </form>
    </div>
</section>
`;

export function showRegisterView(ctx) {
    renderer(registerTemplate(createSubmitHandler(onRegister)));
}

async function onRegister(data, form) { //need to use data here because of name="re-password" above
    if (!data['username'] || !data['email'] || !data['password'] || !data['re-password']) {
        return alert('All fields are required!');
    }
    if (data['password'] != data['re-password']) {
        return alert('Passwords don\'t match!');
    }

    await register(data['username'], data['email'], data['password']);
    updateNav();
    page.redirect('/')
}