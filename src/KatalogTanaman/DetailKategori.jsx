import { Link, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Logo from "../assets/logo-detail-kategori.png";
import kayu_manis from "../assets/tanaman/kayu_manis.png";
import kemangi from "../assets/tanaman/kemangi.png";
import serai from "../assets/tanaman/serai.png";
import soka from "../assets/tanaman/soka.png";
import bambu from "../assets/tanaman/bambu.png";
import ceri from "../assets/tanaman/ceri.png";

// Data tanaman berdasarkan kategori
const categories = {
  1: {
    title: "Akar",
    description:
      "Tanaman herbal dengan berbagai macam manfaat dari bagian daunnya.",
    plants: [
      { id: 1, name: "Kemangi", image: kemangi },
      { id: 2, name: "Kayu Manis", image: kayu_manis },
      { id: 3, name: "Serai", image: serai },
      { id: 4, name: "Bambu", image: bambu },
      { id: 5, name: "Pohon Ceri", image: ceri },
      { id: 6, name: "Soka", image: soka },
    ],
  },
  2: {
    title: "Batang",
    description:
      "Tanaman herbal dengan berbagai macam manfaat dari bagian daunnya.",
    plants: [
      { id: 1, name: "Kemangi", image: kemangi },
      { id: 2, name: "Kayu Manis", image: kayu_manis },
      { id: 3, name: "Serai", image: serai },
      { id: 4, name: "Bambu", image: bambu },
      { id: 5, name: "Pohon Ceri", image: ceri },
      { id: 6, name: "Soka", image: soka },
    ],
  },
  3: {
    title: "Daun",
    description:
      "Tanaman herbal dengan berbagai macam manfaat dari bagian daunnya.",
    plants: [
      { id: 1, name: "Kemangi", image: kemangi },
      { id: 2, name: "Kayu Manis", image: kayu_manis },
      { id: 3, name: "Serai", image: serai },
      { id: 4, name: "Bambu", image: bambu },
      { id: 5, name: "Pohon Ceri", image: ceri },
      { id: 6, name: "Soka", image: soka },
    ],
  },
  4: {
    title: "Bunga",
    description:
      "Tanaman herbal dengan berbagai macam manfaat dari bagian daunnya.",
    plants: [
      { id: 1, name: "Kemangi", image: kemangi },
      { id: 2, name: "Kayu Manis", image: kayu_manis },
      { id: 3, name: "Serai", image: serai },
      { id: 4, name: "Bambu", image: bambu },
      { id: 5, name: "Pohon Ceri", image: ceri },
      { id: 6, name: "Soka", image: soka },
    ],
  },
  5: {
    title: "Buah",
    description:
      "Tanaman herbal dengan berbagai macam manfaat dari bagian daunnya.",
    plants: [
      { id: 1, name: "Kemangi", image: kemangi },
      { id: 2, name: "Kayu Manis", image: kayu_manis },
      { id: 3, name: "Serai", image: serai },
      { id: 4, name: "Bambu", image: bambu },
      { id: 5, name: "Pohon Ceri", image: ceri },
      { id: 6, name: "Soka", image: soka },
    ],
  },
  6: {
    title: "Biji",
    description:
      "Tanaman herbal dengan berbagai macam manfaat dari bagian daunnya.",
    plants: [
      { id: 1, name: "Kemangi", image: kemangi },
      { id: 2, name: "Kayu Manis", image: kayu_manis },
      { id: 3, name: "Serai", image: serai },
      { id: 4, name: "Bambu", image: bambu },
      { id: 5, name: "Pohon Ceri", image: ceri },
      { id: 6, name: "Soka", image: soka },
    ],
  },
  7: {
    title: "Kulit Batang",
    description:
      "Tanaman herbal dengan berbagai macam manfaat dari bagian daunnya.",
    plants: [
      { id: 1, name: "Kemangi", image: kemangi },
      { id: 2, name: "Kayu Manis", image: kayu_manis },
      { id: 3, name: "Serai", image: serai },
      { id: 4, name: "Bambu", image: bambu },
      { id: 5, name: "Pohon Ceri", image: ceri },
      { id: 6, name: "Soka", image: soka },
    ],
  },
  8: {
    title: "Umbi-umbian",
    description:
      "Tanaman herbal dengan berbagai macam manfaat dari bagian daunnya.",
    plants: [
      { id: 1, name: "Kemangi", image: kemangi },
      { id: 2, name: "Kayu Manis", image: kayu_manis },
      { id: 3, name: "Serai", image: serai },
      { id: 4, name: "Bambu", image: bambu },
      { id: 5, name: "Pohon Ceri", image: ceri },
      { id: 6, name: "Soka", image: soka },
    ],
  },
  9: {
    title: "Rimpang",
    description:
      "Tanaman herbal dengan berbagai macam manfaat dari bagian daunnya.",
    plants: [
      { id: 1, name: "Kemangi", image: kemangi },
      { id: 2, name: "Kayu Manis", image: kayu_manis },
      { id: 3, name: "Serai", image: serai },
      { id: 4, name: "Bambu", image: bambu },
      { id: 5, name: "Pohon Ceri", image: ceri },
      { id: 6, name: "Soka", image: soka },
    ],
  },
  10: {
    title: "Tunas dan Pucuk",
    description:
      "Tanaman herbal dengan berbagai macam manfaat dari bagian daunnya.",
    plants: [
      { id: 1, name: "Kemangi", image: kemangi },
      { id: 2, name: "Kayu Manis", image: kayu_manis },
      { id: 3, name: "Serai", image: serai },
      { id: 4, name: "Bambu", image: bambu },
      { id: 5, name: "Pohon Ceri", image: ceri },
      { id: 6, name: "Soka", image: soka },
    ],
  },
};

const DetailKategori = () => {
  const { id } = useParams(); // Mengambil ID dari URL
  const category = categories[id]; // Dapatkan kategori berdasarkan id dari URL

  if (!category) {
    return (
      <h1 className="text-3xl font-bold text-center text-red-500">
        Kategori tidak ditemukan!
      </h1>
    );
  }

  return (
    <>
      <Navbar />

      {/* Bagian Hero/Header Kategori */}
      <div className="relative">
        <img
          src={Logo}
          alt="Various dried plants in bowls"
          className="w-full h-48 object-cover"
        />
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
            <div
              key={index}
              className="relative w-48 h-72 rounded-lg overflow-hidden shadow-lg"
            >
              {/* Menggunakan Link untuk navigasi ke halaman TanamanDetail */}
              <Link to={`/tanaman/${plant.name}`}>
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent p-4">
                  <p className="text-white text-center">{plant.name}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Tombol Kembali */}
        <div className="mt-8">
          <a href="/" className="text-green-600 flex items-center">
            <FaArrowLeft className="mr-2" />{" "}
            {/* Menggunakan ikon FaArrowLeft */}
            Back
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DetailKategori;
