import Parallax from 'parallax-js/dist/parallax.js';

class SubscribePopup {
    constructor() {
        this.form = document.querySelector('.js-subscribe-form');

        if (this.form) {
            this.inputs = this.form.querySelectorAll('.js-input');
            this.agree = this.form.querySelector('#agree');
            this.init();

            const scene = document.getElementById('subscribeScene');
            const parallaxInstance = new Parallax(scene);
        }
    }

    onSubmit = (event) => {
        event.preventDefault();

        const agreeParent = this.agree.parentNode;

        agreeParent.classList.remove('error');

        this.inputs.forEach(el => {
            const parent = el.closest('.input');

            parent.classList.remove('error');

            if (el.value === '') {
                parent.classList.add('error');
            }

            if (el.classList.contains('js-input-phone') && el.value.length !== 16) {
                parent.classList.add('error');
            }
        });

        const errors = [...this.inputs].some(item => {
            const parent = item.closest('.error');

            return parent;
        });

        if (!this.agree.checked) {
            agreeParent.classList.add('error');
        }

        if (!errors && this.agree.checked) {
            const messagePopup = document.querySelector('.js-subscribe-popup-success');

            messagePopup.classList.add('visible');

            setTimeout(() => {
                messagePopup.classList.remove('visible');
            }, 2000);
        }
    };

    init() {
        this.form.addEventListener('submit', this.onSubmit);
    }
}

export default SubscribePopup;
