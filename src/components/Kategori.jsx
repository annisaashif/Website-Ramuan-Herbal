// components/Kategori.jsx

import akar from '../assets/kategori-tanaman/akar.png';
import batang from '../assets/kategori-tanaman/batang.png';
import biji from '../assets/kategori-tanaman/biji.png';
import buah from '../assets/kategori-tanaman/buah.png';
import bunga from '../assets/kategori-tanaman/bunga.png';
import daun from '../assets/kategori-tanaman/daun.png';
import kulit_batang from '../assets/kategori-tanaman/kulit_batang.png';
import rimpang from '../assets/kategori-tanaman/rimpang.png';
import umbi_umbian from '../assets/kategori-tanaman/umbi_umbian.png';
import tunas_dan_pucuk from '../assets/kategori-tanaman/tunas_dan_pucuk.png';


const categories = [
    { name: 'Akar', image: akar },
    { name: 'Batang', image: batang },
    { name: 'Daun', image: biji },
    { name: 'Bunga', image: buah },
    { name: 'Buah', image: bunga  },
    { name: 'Biji', image: daun },
    { name: 'Kulit Batang', image: kulit_batang},
    { name: 'Umbi-Umbian', image: rimpang },
    { name: 'Rimpang', image: umbi_umbian },
    { name: 'Tunas dan Pucuk', image: tunas_dan_pucuk },
];

const Kategori = () => {
    return (
        <div className="container mx-auto py-10">
            <h1 className="text-3xl font-bold text-center text-green-800 mb-8">Kategori Tanaman Herbal</h1>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {categories.map((category, index) => (
                   <div key={index} className="bg-transparent border border-gray-300 rounded-lg shadow-md overflow-hidden">

                        <img src={category.image} alt={`Image of ${category.name}`} className="w-full h-40 object-cover" />
                        <div className="p-2 text-black text-center">
                            {category.name}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Kategori;
