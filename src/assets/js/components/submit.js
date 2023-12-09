import {validation} from "./validation";
import {showModal} from "./modal";

const form = document.querySelector('#form');
const uri = '/';
const url = location.origin + uri + 'api/form.php';

const submitForm = async (form) => {
    form.classList.add('sending');
    const data = new FormData(form);
    const response = await fetch(url, {
        method: 'POST',
        body: data,
    });

    if (response.ok) {
        form.classList.remove('sending');
        form.reset();
        showModal();
    }
}

form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const isValid = validation(form);
    if (isValid === true) submitForm(form);
});
