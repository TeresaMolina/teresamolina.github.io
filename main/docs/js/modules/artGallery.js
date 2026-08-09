const galleryItems=[
    {
        title: "Image1",
        image: "/assets/[folder]/image1.jpg",
        description: "enter comment",
        link: "#"
    },

        {
        title: "Image2",
        image: "/assets/[folder]/image2.jpg",
        description: "enter comment",
        link: "#"
    },    
    
    {
        title: "Image3",
        image: "/assets/[folder]/image3.jpg",
        description: "enter comment",
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