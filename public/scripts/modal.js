export default function Modal() {
    function open() {
        document.querySelector('.modalWrapper').classList.add('active');
    }
    function close() {
        document.querySelector('.modalWrapper').classList.remove('active');
    }

    return {
        open,
        close,
    };
}
