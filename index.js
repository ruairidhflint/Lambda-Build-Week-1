
let inputs = document.querySelectorAll('input');
let input1 = document.querySelector('#input-one');
let input2 = document.querySelector('#input-two');
let submitButton = document.querySelector('.sign-up-button');
let form = document.querySelector('.right-bottom');
let altForm = document.querySelector('.right-bottom-alt');

inputs.forEach(input => input.required = true);







function logDetails() {
    let email = input1.value;
    let password = input2.value;

    console.log(email + " " + password)   
}


function submitted() {
    form.style = "display: none";
    altForm.style = "display: block"

}

let loginButton = document.querySelector('.buttonlogin');
let loginPanel = document.querySelector('.log-in');

loginButton.addEventListener('click', openPanel);

function openPanel() {
    loginPanel.classList.toggle('hidden1')
}

submitButton.addEventListener('click', logDetails);
submitButton.addEventListener('click', submitted)


////Temporary test

// let menuButton = document.querySelector('.menu');
// let menu = document.querySelector('.log-in1');
// menuButton.addEventListener('click', openMenu);


// function openMenu(){
//     menu.classList.toggle('hidden2');

// }

