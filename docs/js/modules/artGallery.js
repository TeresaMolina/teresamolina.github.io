const galleryItems=[
    {
        title: "Image1",
        image: "/assets/art/samples/absalom-banner.jpg",
        description: "Eye Shot of Absalom.",
        link: "#"
    },

        {
        title: "Image2",
        image: "/assets/art/samples/absalom0.jpg",
        description: "Headshot of Absalom.",
        link: "#"
    },    
    
    {
        title: "Image3",
        image: "/assets/art/samples/absalom1.jpg",
        description: "Waist up shot of Absalom.",
        link: "#"
    },

    // {
    //     title: "Image4",
    //     image: "/assets/art/samples/absalom2.jpg",
    //     description: "enter comment",
    //     link: "#"
    // },

    {
        title: "Image5",
        image: "/assets/art/samples/absalom3.jpg",
        description: "Absalom fight with grimm reaper.",
        link: "#"
    },

    {
        title: "Image6",
        image: "/assets/art/samples/cerberus-emote.jpg",
        description: "Cerberus emote.",
        link: "#"
    },

    {
        title: "Image7",
        image: "/assets/art/samples/twitch-avatar1.jpg",
        description: "Twitch avatar - Human Superstar.",
        link: "#"
    },

    {
        title: "Image8",
        image: "/assets/art/samples/twitch-avatar2.jpg",
        description: "Twitch avatar - Animatronic.",
        link: "#"
    },

    {
        title: "Image9",
        image: "/assets/art/samples/twitch-avatar3.jpg",
        description: "Twitch avatar - Ghost Face Woman.",
        link: "#"
    }

];

export function initGallery(){
    const gridContainer = document.getElementById('art-grid');

    if(!gridContaner) return;

    gridContainer.innerHTML='';

    galleryItems.forEach(item=>{
        const cardHTML=`
            <div class="gallery-card">
                <img src="${item.image}" alt="${item.title}" class="gallery-image" onerror="this.src='assets/placeholder.jpg'">

                <div class="gallery-info">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                    ${item.link !== '#' ? `<a href="${item.link}" target="_blank" class="gallery-btn"> View Image </a>` : ''}
                </div>
            </div>
        `;
    gridContainer.insertAdjacentHTML('beforeend', cardHTML);
    });
}