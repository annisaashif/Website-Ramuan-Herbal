import { useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'; // Import ikon panah kiri dari React Icons
import Footer from '../components/footer';
import Navbar from "../components/Navbar"
import Logo from "../assets/logo-detail-kategori.png";
import kayu_manis from "../assets/kategori-batang/kayu_manis.png";
import kemangi from "../assets/kategori-batang/kemangi.png";
import serai from "../assets/kategori-batang/serai.png";
import soka from "../assets/kategori-batang/soka.png";
import bambu from "../assets/kategori-batang/bambu.png";
import ceri from "../assets/kategori-batang/ceri.png";

// Data tanaman berdasarkan kategori
const categories = {
  1: {
    title: 'Akar',
    description: 'Kami Menawarkan beragam pilihan tanaman berdasarkan klasifikasinya',
    plants: [
      { name: 'Kemangi', image: kayu_manis },
      { name: 'Kayu Manis', image: 'https://placehold.co/200x300?text=Kayu+Manis' },
      { name: 'Serai', image: 'https://placehold.co/200x300?text=Serai' }
    ]
  },
  2: {
    title: 'Batang',
    description: 'Tanaman herbal dengan berbagai macam manfaat dari bagian daunnya.',
    plants: [
      { id: 1, name: 'Kemangi', image: kemangi },
      { id: 2, name: 'Kayu Manis ', image: kayu_manis },
      { id: 3, name: 'Serai', image: serai },
      { id: 4, name: 'Bambu', image: bambu },
      { id: 5, name: 'Pohon Ceri', image: ceri },
      { id: 6, name: 'Soka', image: soka }
    ]
  },
  3: {
    title: 'Daun',
    description: 'Kami Menawarkan beragam pilihan tanaman berdasarkan klasifikasinya',
    plants: [
      { name: 'Kemangi', image: 'https://placehold.co/200x300?text=Kemangi' },
      { name: 'Kayu Manis', image: 'https://placehold.co/200x300?text=Kayu+Manis' },
      { name: 'Serai', image: 'https://placehold.co/200x300?text=Serai' }
    ]
  },
  4: {
    title: 'Bunga',
    description: 'Kami Menawarkan beragam pilihan tanaman berdasarkan klasifikasinya',
    plants: [
      { name: 'Kemangi', image: 'https://placehold.co/200x300?text=Kemangi' },
      { name: 'Kayu Manis', image: 'https://placehold.co/200x300?text=Kayu+Manis' },
      { name: 'Serai', image: 'https://placehold.co/200x300?text=Serai' }
    ]
  },
  5: {
    title: 'Buah',
    description: 'Kami Menawarkan beragam pilihan tanaman berdasarkan klasifikasinya',
    plants: [
      { name: 'Kemangi', image: 'https://placehold.co/200x300?text=Kemangi' },
      { name: 'Kayu Manis', image: 'https://placehold.co/200x300?text=Kayu+Manis' },
      { name: 'Serai', image: 'https://placehold.co/200x300?text=Serai' }
    ]
  },
  6: {
    title: 'Biji',
    description: 'Kami Menawarkan beragam pilihan tanaman berdasarkan klasifikasinya',
    plants: [
      { name: 'Kemangi', image: 'https://placehold.co/200x300?text=Kemangi' },
      { name: 'Kayu Manis', image: 'https://placehold.co/200x300?text=Kayu+Manis' },
      { name: 'Serai', image: 'https://placehold.co/200x300?text=Serai' }
    ]
  },
  7: {
    title: 'Kulit Batang',
    description: 'Kami Menawarkan beragam pilihan tanaman berdasarkan klasifikasinya',
    plants: [
      { name: 'Kemangi', image: 'https://placehold.co/200x300?text=Kemangi' },
      { name: 'Kayu Manis', image: 'https://placehold.co/200x300?text=Kayu+Manis' },
      { name: 'Serai', image: 'https://placehold.co/200x300?text=Serai' }
    ]
  },
  8: {
    title: 'Umbi-umbian',
    description: 'Kami Menawarkan beragam pilihan tanaman berdasarkan klasifikasinya',
    plants: [
      { name: 'Kemangi', image: 'https://placehold.co/200x300?text=Kemangi' },
      { name: 'Kayu Manis', image: 'https://placehold.co/200x300?text=Kayu+Manis' },
      { name: 'Serai', image: 'https://placehold.co/200x300?text=Serai' }
    ]
  },
  9: {
    title: 'Rimpang',
    description: 'Kami Menawarkan beragam pilihan tanaman berdasarkan klasifikasinya',
    plants: [
      { name: 'Kemangi', image: 'https://placehold.co/200x300?text=Kemangi' },
      { name: 'Kayu Manis', image: 'https://placehold.co/200x300?text=Kayu+Manis' },
      { name: 'Serai', image: 'https://placehold.co/200x300?text=Serai' }
    ]
  },
  10: {
    title: 'Tunas dan Pucuk',
    description: 'Kami Menawarkan beragam pilihan tanaman berdasarkan klasifikasinya',
    plants: [
      { name: 'Kemangi', image: 'https://placehold.co/200x300?text=Kemangi' },
      { name: 'Kayu Manis', image: 'https://placehold.co/200x300?text=Kayu+Manis' },
      { name: 'Serai', image: 'https://placehold.co/200x300?text=Serai' }
    ]
  },
};

const DetailKategori = () => {
    const { id } = useParams(); // Mengambil ID dari URL
    const category = categories[id]; // Dapatkan kategori berdasarkan id dari URL

    if (!category) {
        return <h1 className="text-3xl font-bold text-center text-red-500">Kategori tidak ditemukan!</h1>;
    }

    return (
        <>
            <Navbar />

            {/* Bagian Hero/Header Kategori */}
            <div className="relative">
                <img src={Logo} alt="Various dried plants in bowls" className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-black opacity-5"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <h1 className="text-4xl font-bold">{category.title}</h1>
                    <p className="text-lg">{category.description}</p>
                </div>
            </div>

            {/* Bagian Daftar Tanaman */}
            <div className="p-20">
                <div className="flex space-x-4">
                    {category.plants.map((plant, index) => (
                        <div key={index} className="relative w-48 h-72 rounded-lg overflow-hidden shadow-lg">
                            <img src={plant.image} alt={plant.name} className="w-full h-full object-cover" />
                            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent p-4">
                                <p className="text-white text-center">{plant.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Tombol Kembali */}
                  <div className="mt-8">
                      <a href="/" className="text-green-600 flex items-center">
                          <FaArrowLeft className="mr-2" /> {/* Menggunakan ikon FaArrowLeft */}
                          Back
                      </a>
                  </div>
            </div>

            <Footer />
        </>
    );
};

export default DetailKategori;
