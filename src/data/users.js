import { clearUserData, setUserData } from "../util.js";
import { get, post } from "./request.js";

const endpoints = {
    login: '/login',
    register: '/users',
    logout: '/logout'
}
export async function login(username, password) {
    const result = await post(endpoints.login + `?username=${username}&password=${password}`);
    setUserData(result);
}

export async function register(username, email, password) {
    const result = await post(endpoints.register, {username, email, password });
    setUserData(result);
}

export async function logout() {
    const promise = get(endpoints.logout); // calls the promise synch and leaves it
    clearUserData(); // clears the data after the promise is already called

    await promise; // awaits the pending promise to resolve
}

