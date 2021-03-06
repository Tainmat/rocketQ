export default function Modal() {
    const modalWrapper = document.querySelector('.modalWrapper');
    const cancelButton = document.querySelector('.button.cancel');

    cancelButton.addEventListener('click', close);

    function open() {
        modalWrapper.classList.add('active');
    }
    function close() {
        modalWrapper.classList.remove('active');
    }

    return {
        open,
        close,
    };
}
