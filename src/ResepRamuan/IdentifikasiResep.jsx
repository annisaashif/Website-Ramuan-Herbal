import { useParams } from "react-router-dom"; // Mengambil parameter dari URL
import Navbar from "../components/Navbar";
import { FaArrowLeft } from "react-icons/fa";
import Footer from "../components/Footer";
import Logo from "../assets/logo-detail-kategori.png";
import kayu_manis from "../assets/tanaman/kayu_manis.png";
import jahe from "../assets/tanaman/jahe.png";
import lidah_buaya from "../assets/tanaman/lidah_buaya.png";
import bawang_putih from "../assets/tanaman/bawang_putih.png";
import madu from "../assets/tanaman/madu.png";
import daun_mint from "../assets/tanaman/daun_mint.png";

// Data herbal dan penyakit yang sesuai
const herbs = [
  { name: "kayu-manis", image: kayu_manis },
  { name: "jahe", image: jahe },
  { name: "lidah-buaya", image: lidah_buaya },
  { name: "daun-mint", image: daun_mint },
  { name: "bawang-putih", image: bawang_putih },
  { name: "madu", image: madu },
];

const diseases = [
  {
    id: 1,
    name: "Batuk Kronis",
    description:
      "Batuk yang berlangsung lebih dari delapan minggu (pada dewasa) atau empat minggu (pada anak-anak). Kondisi ini sering terkait dengan penyakit kronis seperti asma, penyakit paru obstruktif kronis (PPOK), tuberkulosis, atau GERD (gastroesophageal reflux disease) yang menyebabkan asam lambung naik ke tenggorokan dan mengiritasi saluran pernapasan.",
  },
  {
    id: 2,
    name: "Asma",
    description:
      "Asma adalah penyakit jangka panjang yang menyebabkan saluran pernapasan menyempit dan membengkak serta memproduksi lendir berlebih. Hal ini dapat mempersulit bernapas dan memicu batuk, mengi, serta sesak napas.",
  },
];
function IdentifikasiResep() {
  const { id } = useParams(); // Mengambil ID dari URL
  const selectedDisease = diseases.find(
    (disease) => disease.id === parseInt(id)
  );

  return (
    <>
      <Navbar />

      <div className="relative">
        <img
          src={Logo}
          alt="Background with various herbs"
          className="w-full h-60 object-cover"
        />
        <div className="absolute inset-0 bg-green-100 opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-3xl font-bold">
            {selectedDisease
              ? selectedDisease.name
              : "Penyakit Tidak Ditemukan"}
          </h1>
          <p className="mt-2 text-lg">
            {selectedDisease
              ? selectedDisease.description
              : "Deskripsi penyakit tidak tersedia."}
          </p>
        </div>
      </div>

      <div className="container mx-auto p-4 mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {herbs.map((herb, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={herb.image}
                alt={`Image of ${herb.name}`}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 bg-gradient-to-t from-[#27481c] to-transparent text-white text-center">
                <p className="font-semibold">{herb.name.replace("-", " ")}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <a href="/resep-ramuan" className="text-green-600 flex items-center">
            <FaArrowLeft className="mr-2" /> Back
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default IdentifikasiResep;
