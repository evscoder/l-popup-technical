class WindowPopup {
    constructor() {
        this.modal = document.querySelector('.window-popup');

        if (this.modal) {
            this.toggle = document.querySelectorAll('[data-modal]');
            this.closeTrigger = document.querySelectorAll('[data-dismiss="modal"]');

            this.onInit();
        }
    }

    onInit() {
        this.toggle.forEach(el => {
            el.addEventListener('click', event => WindowPopup.show(event));
        });

        this.closeTrigger.forEach(el => {
            el.addEventListener('click', event => WindowPopup.close(event));
        });
    }

    static toggleClass(modal) {
        modal.classList.add('is-active');
        modal.classList.add('is-animate');

        console.log(modal);
    }

    static show(event) {
        const target = event.currentTarget.getAttribute('data-modal');
        const modal = document.querySelector(target);

        event.preventDefault();

        if (event.target.closest('.modal')) {
            setTimeout(() => {
                WindowPopup.toggleClass(modal);
            }, 1000);
        } else {
            WindowPopup.toggleClass(modal);
        }
    }

    static close(event) {
        const modal = event.target.closest('.modal');

        modal.classList.remove('is-animate');

        setTimeout(() => {
            modal.classList.remove('is-active');
        }, 1000);
    }
}

export default WindowPopup;
