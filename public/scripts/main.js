import Modal from './modal.js';

const modal = Modal();

//Get all buttons that exist with class 'check'
const checkButton = document.querySelectorAll('.actions a.check');

checkButton.forEach(button => {
    //Add listeners to check buttons
    button.addEventListener('click', event => {
        //Open Modal
        modal.open();
    });
});
