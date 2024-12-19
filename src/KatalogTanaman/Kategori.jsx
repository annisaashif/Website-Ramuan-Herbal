import { Link } from "react-router-dom";
import akar from "../assets/kategori-tanaman/akar.png";
import batang from "../assets/kategori-tanaman/batang.png";
import biji from "../assets/kategori-tanaman/biji.png";
import buah from "../assets/kategori-tanaman/buah.png";
import bunga from "../assets/kategori-tanaman/bunga.png";
import daun from "../assets/kategori-tanaman/daun.png";
import kulit_batang from "../assets/kategori-tanaman/kulit_batang.png";
import rimpang from "../assets/kategori-tanaman/rimpang.png";
import umbi_umbian from "../assets/kategori-tanaman/umbi_umbian.png";
import tunas_dan_pucuk from "../assets/kategori-tanaman/tunas_dan_pucuk.png";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/footer";

const categories = [
  { id: 1, name: "Akar", image: akar },
  { id: 2, name: "Batang", image: batang },
  { id: 3, name: "Daun", image: biji },
  { id: 4, name: "Bunga", image: buah },
  { id: 5, name: "Buah", image: bunga },
  { id: 6, name: "Biji", image: daun },
  { id: 7, name: "Kulit Batang", image: kulit_batang },
  { id: 8, name: "Umbi-Umbian", image: rimpang },
  { id: 9, name: "Rimpang", image: umbi_umbian },
  { id: 10, name: "Tunas dan Pucuk", image: tunas_dan_pucuk },
];

const Kategori = () => {
  return (
    <>
      <Navbar />
      <Header />

      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold text-center text-green-800 mb-8">
          Kategori Tanaman Herbal
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {categories.map((category) => (
            <Link
              to={`/kategori/${category.id}`}
              key={category.id}
              className="bg-transparent border border-gray-300 rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={category.image}
                alt={`Image of ${category.name}`}
                className="w-full h-40 object-cover"
              />
              <div className="p-2 bg-[#27481c] text-white text-center">
                {category.name}
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Kategori;
