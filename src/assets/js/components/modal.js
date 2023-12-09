import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
const modal = document.querySelector('[data-modal]');

const modalControl = () => {
    if (!modal) return;
    const closeBtn = modal.querySelector('[data-modal-close]');

    const hideModal = () => {
        modal.classList.remove('show');
        enableBodyScroll(modal);
    }

    closeBtn.addEventListener('click', hideModal);
    modal.addEventListener('click', (e) => {
        const target = e.target.closest('.modal__inner');
        if (!target) hideModal();
    });
}

const showModal = () => {
    if (!modal) return;
    disableBodyScroll(modal);
    modal.classList.add('show');
}

modalControl();

export {showModal};
