import { loadHeader } from './components/header.js';
import { loadFooter } from './components/footer.js';


document.addEventListener('DOMContentLoaded', () => {

    loadHeader();
    loadFooter();


    const currentPath =
        window.location.pathname;


    if (currentPath.includes('about')) {

        import('./modules/artGallery.js')
            .then(module => {
                module.initGallery();
            });

    }

});