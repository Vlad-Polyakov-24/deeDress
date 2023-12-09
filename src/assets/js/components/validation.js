const scrollToError = (form) => {
    const firstErrorField = form.querySelector('.invalid-group');

    if (firstErrorField) {
        window.scrollBy({
            top: firstErrorField.getBoundingClientRect().top - 100,
            behavior: 'smooth',
        });
    }
}

const validation = (form) => {
    if (!form) return;
    const requiredGroups = form.querySelectorAll('[data-required]');
    const errors = {
        empty: 'Поле не може бути пустим',
        phone: 'Неправильний номер',
    };
    const isValid = [];

    requiredGroups.forEach(() => isValid.push(false));

    const showError = (group, message) => {
        if (!group.classList.contains('invalid-group')) {
            const messageItem = document.createElement('p');
            messageItem.classList.add('form__error-message');
            messageItem.innerHTML = message;
            group.classList.add('invalid-group');
            group.append(messageItem);
        }
    }

    const hideError = group => {
        const errorMessage = group.querySelector('.form__error-message');
        group.classList.remove('invalid-group');
        if (errorMessage) errorMessage.remove();
    }

    const telValidation = (group, i) => {
        const field = group.querySelector('input');
        const regex = /^\+?3?8?(0\d{9})$/;

        if (!regex.test(field.value.trim())) {
            isValid[i] = false;
            showError(group, errors.phone);
        } else {
            isValid[i] = true;
            hideError(group);
        }
    }

    requiredGroups.forEach((group, i) => {
        const field = group.querySelector('input');

        if (field.value.trim() === '') {
            isValid[i] = false;
            showError(group, errors.empty);
        } else {
            isValid[i] = true;
            hideError(group);
        }

        if (group.dataset.required === 'phone') {
            telValidation(group, i);
        }

        field.addEventListener('blur', () => hideError(group));
    });

    if (isValid.every(item => item === true)) {
        return true;
    } else {
        scrollToError(form);
        return false;
    }
}

export {validation};
