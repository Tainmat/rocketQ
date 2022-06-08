import Modal from './modal.js';

const modal = Modal();

const modalTitle = document.getElementById('modal-tilte');
const modalDescription = document.getElementById('modal-description');
const modalActionButton = document.querySelector('.modalWrapper button');

const deleteButton = document.querySelectorAll('.actions a.delete'); //Get all buttons that exist with class 'delete'
const checkButton = document.querySelectorAll('.actions a.check'); //Get all buttons that exist with class 'check'

function handleClick(e, check = true) {
    e.preventDefault();

    const form = document.querySelector('.modal form');
    const roomId = document.getElementById('room-id').dataset.id;
    const action = check ? 'check' : 'delete';
    const questionId = e.target.dataset.id;

    form.setAttribute('action', `/room/${roomId}/${questionId}/${action}`);

    modalTitle.innerHTML = check ? 'Marcar como lida' : 'Excluir essa pergunta';
    modalDescription.innerHTML = check
        ? 'Tem certeza que deseja marcar como lida esta pergunta?'
        : 'Tem certeza que deseja excluir esta pergunta?';
    modalActionButton.innerHTML = check
        ? 'Sim, marcar como lida'
        : 'Sim, excluir';
    check
        ? modalActionButton.classList.remove('red')
        : modalActionButton.classList.add('red');
    modal.open();
}

deleteButton.forEach(button => {
    //Add listeners to check buttons
    button.addEventListener('click', e => handleClick(e, false));
});

checkButton.forEach(button => {
    button.addEventListener('click', handleClick);
});

//01:50:00
