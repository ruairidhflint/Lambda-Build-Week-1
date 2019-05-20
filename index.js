
let inputs = document.querySelectorAll('input');
let input1 = document.querySelector('#input-one');
let input2 = document.querySelector('#input-two');
let submitButton = document.querySelector('button');
let form = document.querySelector('.right-bottom');
let altForm = document.querySelector('.right-bottom-alt');
inputs.forEach(input => input.required = true);

submitButton.addEventListener('click', logDetails);
submitButton.addEventListener('click', submitted)



function logDetails() {
    let email = input1.value;
    let password = input2.value;

    console.log(email + " " + password)   
}


function submitted() {
    form.style = "display: none";
    altForm.style = "display: block"

}



