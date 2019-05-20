let loginButton2 = document.querySelector('.buttonlogin1');
let loginPanel = document.querySelector('.log-in');

loginButton2.addEventListener('click', openPanel);

function openPanel() {
    loginPanel.classList.toggle('hidden1')
}