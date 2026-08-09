export function loadFooter(){
    const footerHTML = `
    <footer>
        <p>&copy; August 2026 My Portfolio. All rights reserved. Graphics: Sakura Starline Studios</p>
    </footer>
    `;
    document.body.insertAdjacentHTML('beforeend', footerHTML);
}