// import { useParams } from 'react-router-dom';
// import { useState } from 'react';
import headerImage from '../assets/lg-header.png';
import Footer from '../components/footer';
import Navbar from "../components/Navbar";
import Logo2 from "../assets/logo2.png";
import ResepTerpopuler from './ResepTerpopuler';
import pernapasan from "../assets/kategori-penyakit/pernapasan.png";
import ginjal from "../assets/kategori-penyakit/ginjal.png";
import hormon from "../assets/kategori-penyakit/hormonal.png";


const categories = [
  { icon: pernapasan, text: "Penyakit Pernapasan" },
  { icon: ginjal, text: "Penyakit Pencernaan" },
  { icon: hormon, text: "Penyakit Kulit" },
  { icon: "https://placehold.co/30x30", text: "Penyakit Imunitas" },
  { icon: "https://placehold.co/30x30", text: "Penyakit Metabolisme" },
  { icon: "https://placehold.co/30x30", text: "Hormonal dan Reproduksi" },
  { icon: "https://placehold.co/30x30", text: "Sendi dan Otot" },
  { icon: "https://placehold.co/30x30", text: "Gangguan Saraf" },
  { icon: "https://placehold.co/30x30", text: "Ginjal dan Saluran Kemih" }
];


function ResepRamuan() {
  return (
    <>
      <Navbar/>
      <div
        className="relative" 
        style={{ height: '450px', // Mengatur tinggi menjadi 300 piksel
          backgroundImage: `url(${headerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center' }}
        >

        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <div className="mb-4">
            {/* Bagian logo di atas tulisan */}
            <img
              src={Logo2}
              alt="Logo Herbal"
              className="w-25 h-25 mb-6" // Menambahkan ukuran dan margin bawah
            />
          </div>
          <h1 className="text-4xl font-bold mb-2">Resep Ramuan Tradisional</h1>
          <p className="text-lg">
            Selamat datang di Resep Ramuan Tradisional, tempat di mana Anda dapat menemukan berbagai resep ramuan herbal yang telah digunakan secara turun temurun dalam budaya Indonesia
          </p>
        </div>
      </div>

                <div className="flex flex-col items-center justify-center bg-white pt-10"> {/* Mengurangi padding top */}
            <h1 className="text-2xl font-bold text-green-900 mb-5">Layanan Fitur Resep Ramuan Tradisional</h1>
            <div className="flex space-x-8 mb-8">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-green-900 rounded-full flex items-center justify-center text-white text-3xl">1</div>
                <p className="mt-4 text-green-900">Klasifikasi Penyakit</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-green-900 rounded-full flex items-center justify-center text-white text-3xl">2</div>
                <p className="mt-4 text-green-900">Identifikasi Penyakit</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-green-900 rounded-full flex items-center justify-center text-white text-3xl">3</div>
                <p className="mt-4 text-green-900">Temukan Resep</p>
              </div>
            </div>
            <div className="w-4/5 h-8 bg-green-900 mx-auto"></div>


          </div>

          <div className="text-center mt-8">
  <h1 className="text-3xl font-bold text-green-800 mb-6">Kategori Penyakit</h1>
  <div className="w-4/5 mx-auto"> {/* Tambahkan div ini */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {categories.map((category, index) => (
        <div
          key={index}
          className="flex items-center justify-between bg-green-100 p-4 rounded-lg shadow-md"
        >
          <div className="flex items-center">
            <img
              src={category.icon}
              alt={category.text}
              className="w-8 h-8 mr-4"
            />
            <span className="text-lg text-green-800">{category.text}</span>
          </div>
          <i className="fas fa-chevron-right text-green-800"></i>
        </div>
      ))}
    </div>
  </div> {/* Tutup div ini */}
</div>


                <ResepTerpopuler/>
                <Footer/>


                

      

    </>
  )
}

export default ResepRamuan
