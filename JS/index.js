// Assign variables to DOM Elements for future reference //
let inputs = document.querySelectorAll('input');
let input1 = document.querySelector('#input-one');
let input2 = document.querySelector('#input-two');
let submitButton = document.querySelector('.sign-up-button');
let form = document.querySelector('.right-bottom');
let altForm = document.querySelector('.right-bottom-alt');
let signupButton = document.querySelector('.signup-button');

// Simple function to assign a required value to each input. //
inputs.forEach(input => input.required = true);

// This is a  simple function to simulate the log in form. I have no access to a back end program //
// to make use of the data, so as example alternative I extract the data from the input and log it to the console.//
function logDetails() {
    let email = input1.value;
    let password = input2.value;

    console.log(email + " " + password)   
}

// A function to change the sign up form to a "thank you for signing up"
// form by hiding the original sectiona and revealing the other.

function submitted() {
    form.style = "display: none";
    altForm.style = "display: block"
}

//Assigning the log in button and log in panel variables //

let loginButton = document.querySelector('.buttonlogin');
let loginPanel = document.querySelector('.log-in');

// Click event to open the login panel using the function below.

loginButton.addEventListener('click', openPanel);

function openPanel() {
    loginPanel.classList.toggle('hidden1')
}

// Click events for the sign in form. 

submitButton.addEventListener('click', logDetails);
submitButton.addEventListener('click', submitted);
signupButton.addEventListener('click', closeMenu);


//When the window is resized, the log in panel could sometimes get lost as it wasn't responsive. 
//This event listening automatically closes the panel if the window is resized.     
window.addEventListener('resize', closeMenu)

// Simple fucnction that closes the log in panel, only if it is already open.

function closeMenu(){
    if (!loginPanel.classList.contains('hidden1')){
    loginPanel.classList.toggle('hidden1')
    }
};

