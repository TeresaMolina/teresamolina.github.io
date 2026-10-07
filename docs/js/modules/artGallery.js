const galleryItems = [
    {
        title: "Absalom Banner",
        image: "/assets/art/samples/absalom-banner.jpg",
        description: "Eye Shot of Absalom.",
        link: "/assets/art/samples/absalom-banner.jpg"
    },
    {
        title: "Absalom Headshot",
        image: "/assets/art/samples/absalom0.jpg",
        description: "Headshot of Absalom.",
        link: "/assets/art/samples/absalom0.jpg"
    },
    {
        title: "Absalom Waist Shot",
        image: "/assets/art/samples/absalom1.jpg",
        description: "Waist up shot of Absalom.",
        link: "/assets/art/samples/absalom1.jpg"
    },
    {
        title: "Absalom Fight Scene",
        image: "/assets/art/samples/absalom3.jpg",
        description: "Absalom fight with grimm reaper.",
        link: "/assets/art/samples/absalom3.jpg"
    },
    {
        title: "Cerberus Emote",
        image: "/assets/art/samples/cerberus-emote.jpg",
        description: "Cerberus emote.",
        link: "/assets/art/samples/cerberus-emote.jpg"
    },
    {
        title: "Twitch Avatar - Human Superstar",
        image: "/assets/art/samples/twitch-avatar1.jpg",
        description: "Twitch avatar - Human Superstar.",
        link: "/assets/art/samples/twitch-avatar1.jpg"
    },
    {
        title: "Twitch Avatar - Animatronic",
        image: "/assets/art/samples/twitch-avatar2.jpg",
        description: "Twitch avatar - Animatronic.",
        link: "/assets/art/samples/twitch-avatar2.jpg"
    },
    {
        title: "Twitch Avatar - Ghost Face Woman",
        image: "/assets/art/samples/twitch-avatar3.jpg",
        description: "Twitch avatar - Ghost Face Woman.",
        link: "/assets/art/samples/twitch-avatar3.jpg"
    }
];

export function initGallery() {
    const gridContainer = document.getElementById('art-grid');

    if (!gridContainer) return;

    gridContainer.innerHTML = '';

    galleryItems.forEach(item => {
        const cardHTML = `
            <div class="gallery-card">
                <img src="${item.image}" alt="${item.title}" class="gallery-image" onerror="this.src='/assets/placeholder.jpg'">

                <div class="gallery-info">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                    ${item.link && item.link !== '#' ? `<a href="${item.link}" target="_blank" rel="noopener noreferrer" class="gallery-btn">View Image</a>` : ''}
                </div>
            </div>
        `;
        gridContainer.insertAdjacentHTML('beforeend', cardHTML);
    });
}

// Automatically invoke on DOM load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGallery);
} else {
    initGallery();
}