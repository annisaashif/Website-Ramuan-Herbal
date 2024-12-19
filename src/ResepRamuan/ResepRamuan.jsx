// import { useParams } from 'react-router-dom';
// import { useState } from 'react';
import headerImage from "../assets/lg-header.png";
import { Link } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import Logo2 from "../assets/logo2.png";
import ResepTerpopuler from "./ResepTerpopuler";
import pernapasan from "../assets/kategori-penyakit/pernapasan.png";
import ginjal from "../assets/kategori-penyakit/ginjal.png";
import hormon from "../assets/kategori-penyakit/hormonal.png";
import imunitas from "../assets/kategori-penyakit/imunitas.png";
import kulit from "../assets/kategori-penyakit/kulit.png";
import metabolisme from "../assets/kategori-penyakit/metabolisme.png";
import pencernaan from "../assets/kategori-penyakit/pencernaan.png";
import saraf from "../assets/kategori-penyakit/saraf.png";
import sendi from "../assets/kategori-penyakit/sendi.png";

const categories = [
  { id: 1, icon: pernapasan, text: "Penyakit Pernapasan" },
  { id: 2, icon: pencernaan, text: "Penyakit Pencernaan" },
  { id: 3, icon: kulit, text: "Penyakit Kulit" },
  { id: 4, icon: imunitas, text: "Penyakit Imunitas" },
  { id: 5, icon: metabolisme, text: "Penyakit Metabolisme" },
  { id: 6, icon: hormon, text: "Hormonal dan Reproduksi" },
  { id: 7, icon: sendi, text: "Sendi dan Otot" },
  { id: 8, icon: saraf, text: "Gangguan Saraf" },
  { id: 9, icon: ginjal, text: "Ginjal dan Saluran Kemih" },
];

function ResepRamuan() {
  return (
    <>
      <Navbar />
      <div
        className="relative"
        style={{
          height: "450px",
          backgroundImage: `url(${headerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <div className="mb-4">
            <img src={Logo2} alt="Logo Herbal" className="w-25 h-25 mb-6" />
          </div>
          <h1 className="text-4xl font-bold mb-2">Resep Ramuan Tradisional</h1>
          <p className="text-lg">
            Selamat datang di Resep Ramuan Tradisional, tempat di mana Anda
            dapat menemukan berbagai resep ramuan herbal.
          </p>
        </div>
      </div>

      <div className="text-center mt-8">
        <h1 className="text-3xl font-bold text-green-800 mb-6">
          Kategori Penyakit
        </h1>
        <div className="w-4/5 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {categories.map((category) => (
              <Link to={`/resepramuan/${category.id}`} key={category.id}>
                <div className="flex items-center justify-between bg-green-100 p-4 rounded-lg shadow-md">
                  <div className="flex items-center">
                    <img
                      src={category.icon}
                      alt={category.text}
                      className="w-8 h-8 mr-4"
                    />
                    <span className="text-lg text-green-800">
                      {category.text}
                    </span>
                  </div>
                  <i className="fas fa-chevron-right text-green-800"></i>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <ResepTerpopuler />
      <Footer />
    </>
  );
}

export default ResepRamuan;
