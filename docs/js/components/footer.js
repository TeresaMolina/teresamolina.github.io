export function loadFooter() {

    const footerHTML = `
        <footer class="site-footer">

            <p>
                © 2026 Teresa Molina
                <span aria-hidden="true"> · </span>
                Built with curiosity &amp; code ✦
            </p>

        </footer>
    `;

    document.body.insertAdjacentHTML(
        'beforeend',
        footerHTML
    );
}