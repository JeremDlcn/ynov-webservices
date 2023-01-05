const categoryData = [
    {
        name: 'Paintball',
        type: 'paintball',
        image: 'https://picsum.photos/200/300'
    },
    {
        name: 'Kayak',
        type: 'kayak',
        image: 'https://picsum.photos/200/300'
    },
    {
        name: 'Escalade',
        type: 'escalade',
        image: 'https://picsum.photos/200/300'
    },
    {
        name: 'VTT',
        type: 'vtt',
        image: 'https://picsum.photos/200/300'
    },
    {
        name: 'Randonnée',
        type: 'randonnee',
        image: 'https://picsum.photos/200/300'
    },
    {
        name: 'Rafting',
        type: 'rafting',
        image: 'https://picsum.photos/200/300'
    },
    {
        name: 'Parapente',
        type: 'parapente',
        image: 'https://picsum.photos/200/300'
    },
    {
        name: 'Ski',
        type: 'ski',
        image: 'https://picsum.photos/200/300'
    },
    {
        name: 'Plongée',
        type: 'plongee',
        image: 'https://picsum.photos/200/300'
    },
    {
        name: 'Voile',
        type: 'voile',
        image: 'https://picsum.photos/200/300'
    },
    {
        name: 'Paddle',
        type: 'paddle',
        image: 'https://picsum.photos/200/300'
    }
]
categoryData.forEach(element => {
    const category = document.createElement('div');
    category.className = 'category';
    category.innerHTML = `
        <a href="/category?name=${element.type}">
            <img src="${element.image}" alt="${element.type} image" class="category-image"/>
            <h2 class="category-title">${element.name}</h2>
        </a>
    `;
    document.querySelector('#category').appendChild(category);
});


