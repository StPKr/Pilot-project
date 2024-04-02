export function saveUserData(data) {
    localStorage.setItem('user', JSON.stringify(data));
}

export function getUserData() {
    return JSON.parse(localStorage.getItem('user'));
}

export function clearUserData() {
    localStorage.removeItem('user');
}

export function updateNav() {
    const userData = getUserData();

    document.querySelector('div .guest').style.display = userData ? 'none' : 'block';
    document.querySelector('div .user').style.display = userData ? 'block' : 'none';
}