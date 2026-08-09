export function loadHeader() {

    const headerHTML = `
        <header class="site-header">

            <nav class="site-nav" aria-label="Main navigation">

                <a href="/" class="site-logo">
                    <span>Owner of Sakura Starline Studios</span>
                </a>

                <ul class="nav-links">

                    <li>
                        <a href="/about/">About</a>
                    </li>

                    <li>
                        <a href="/education/">Education</a>
                    </li>

                    <li>
                        <a href="/experience/">Experience</a>
                    </li>

                    <li>
                        <a href="/high-school/">High School</a>
                    </li>

                    <li>
                        <a href="/grad-school/">Grad School</a>
                    </li>

                </ul>

            </nav>

        </header>
    `;

    document.body.insertAdjacentHTML(
        'afterbegin', headerHTML);
}