const categoryData = [{
        name: 'Randonnée',
        type: 'hiking',
        image: 'https://www.aude.fr/sites/default/files/styles/768x430/public/media/images/4.%20Vivre%20dans%20l%27aude/4.4%20Nature/4.4.1%20Randonner/4.4.1%20MAjeure.jpg?itok=hWlfgYU1'
    },
    {
        name: 'Escalade',
        type: 'climbing',
        image: 'https://conseils.casalsport.com/wp-content/uploads/2021/06/escalade-10-regles.jpg'
    },
    {
        name: 'Rafting',
        type: 'rafting',
        image: 'https://an-rafting.com/wp-content/uploads/2020/03/P1070584-scaled.jpg'
    },
    {
        name: 'Plongée',
        type: 'plongee',
        image: 'https://media.ucpa.com/image/upload/f_auto/t_UCPA/UCPA-ODYSSEE/France/00096825-saint-cyr-mineurs-plongee.jpg'
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