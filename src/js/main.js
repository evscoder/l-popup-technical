import 'normalize-css/normalize.css';
import {
    isMobilePlatform,
    isPlatformIOS,
    isTouchDevices
} from './fn/detected.js';
import Input from '../components/ui/input/input.js';
import WindowPopup from '../components/ui/window-popup/window-popup.js';
import SubscribePopup from '../components/layout/subscribe-popup/subscribe-popup.js';

class App {
    constructor() {
        this.setDetected();
        this.init();
    }

    setDetected() {
        if (isTouchDevices) {
            document.documentElement.classList.add('is-touch');
        }

        if (isMobilePlatform) {
            document.documentElement.classList.add('is-mobile-platform');
        }

        if (isPlatformIOS) {
            document.documentElement.classList.add('ios');
        }
    }

    onLoaded = () => {
        document.body.classList.add('load');
    };

    onReady = () => {
        window.addEventListener('load', this.onLoaded);

        new Input();
        new SubscribePopup();
        new WindowPopup();
    };

    init() {
        document.addEventListener('DOMContentLoaded', this.onReady);
    }

    dispose() {

    }
}

const app = new App();
