//src/components/CategoryList.jsx


const CategoryList = () => {
    const categories = [
        { name: 'Akar', image: 'https://placehold.co/200x200?text=Akar' },
        { name: 'Batang', image: 'https://placehold.co/200x200?text=Batang' },
        { name: 'Daun', image: 'https://placehold.co/200x200?text=Daun' },
        { name: 'Bunga', image: 'https://placehold.co/200x200?text=Bunga' },
        { name: 'Buah', image: 'https://placehold.co/200x200?text=Buah' },
        { name: 'Biji', image: 'https://placehold.co/200x200?text=Biji' },
        { name: 'Kulit Batang', image: 'https://placehold.co/200x200?text=Kulit+Batang' },
        { name: 'Umbi-Umbian', image: 'https://placehold.co/200x200?text=Umbi-Umbian' },
        { name: 'Rimpang', image: 'https://placehold.co/200x200?text=Rimpang' },
        { name: 'Tunas dan Pucuk', image: 'https://placehold.co/200x200?text=Tunas+dan+Pucuk' },
    ];

    return (
        <div>
            {categories.map((category, index) => (
                <div key={index}>
                    <img src={category.image} alt={category.name} />
                    <h2>{category.name}</h2>
                </div>
            ))}
        </div>
    );
};

export default CategoryList;