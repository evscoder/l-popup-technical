import IMask from 'imask';

class Input {
    constructor() {
        this.inputs = document.querySelectorAll('.js-input');
        this.inputPhone = document.querySelectorAll('.js-input-phone');
        this.init();
    }

    onEnterInput = (event) => {
        const target = event.target;
        const parent = target.closest('.input');

        if (target.value === '') {
            parent.classList.remove('filled');
        } else {
            parent.classList.add('filled');
            parent.classList.remove('error');
        }
    };

    onBlurInput = (event) => {
        const target = event.target;
        const parent = target.closest('.input');

        if (target.classList.contains('js-input-phone') && target.value.length !== 16) {
            setTimeout(() => {
                parent.classList.add('error');
            }, 100);
        }
    };

    phoneMask() {
        this.inputPhone.forEach(el => {
            IMask(el, { mask: '+{7}(000)000-00-00' });
        });
    }

    init() {
        this.inputs.forEach(el => {
            el.addEventListener('input', this.onEnterInput);
            el.addEventListener('blur', this.onBlurInput);
        });

        this.phoneMask();
    }
}

export default Input;
