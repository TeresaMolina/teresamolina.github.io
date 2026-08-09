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

    else if (currentPath.includes('/grad-school/')) {

        import('./modules/gradProjects.js')
            .then(module => {
                module.initGradProjects();
            });

    }

});