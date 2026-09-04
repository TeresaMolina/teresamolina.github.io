export function loadHeader() {

    const headerHTML = `
        <header class="site-header">

            <nav class="site-nav" aria-label="Main navigation">

                <a href="/" class="site-logo" aria-label="Teresa Molina home.">
                    <img
                        src="/assets/art/branding/logo.jpg"
                        alt="Teresa Molina logo"
                    >
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
                        <a href="https://sites.google.com/view/grad-school-teresa/home"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Graduate School
                        </a>
                    </li>

                </ul>

            </nav>

        </header>
    `;

    document.body.insertAdjacentHTML(
        'afterbegin', headerHTML);
}