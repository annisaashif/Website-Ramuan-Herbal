
import { useParams, useNavigate } from 'react-router-dom';
import Footer from '../components/footer';
import Navbar from "../components/Navbar";
import pernapasan from "../assets/kategori-penyakit/pernapasan2.png";
import pencernaan from "../assets/detail-penyakit/pencernaan.png";
import ginjal from "../assets/detail-penyakit/ginjal.png";
import hormon from "../assets/detail-penyakit/hormon.png";
import imunitas from "../assets/detail-penyakit/imunitas.png";
import kulit from "../assets/detail-penyakit/kulit.png";
import metabolisme from "../assets/detail-penyakit/metabolisme.png";
import saraf from "../assets/detail-penyakit/saraf.png";
import sendi from "../assets/detail-penyakit/sendi.png";
import asma from "../assets/penyakit/asma.png";
import bronkitis from "../assets/penyakit/bronkitis.png";
import batuk from "../assets/penyakit/batuk.png";
import flu from "../assets/penyakit/flu.png";
import sinusitis from "../assets/penyakit/sinusitis.png";

import { FaArrowLeft } from "react-icons/fa";

const conditionsData = {
    1: {
      title: "Penyakit Pernapasan",
      description: "Kami ingin membantu anda menemukan solusi alami dalam mengatasi berbagai masalah pernapasan seperti batuk, asma, flu, sesak napas, dan bronkitis.",
      image: pernapasan,
      conditions: [
        { id: 1, name: "Asma", image: asma },
        { id: 2, name: "Bronkitis", image: bronkitis },
        { id: 3, name: "Batuk Kronis", image: batuk },
        { id: 4, name: "Flu", image: flu },
        { id: 5, name: "Sinusitis", image: sinusitis },
      ]
    },
    2: {
      title: "Penyakit Pencernaan",
      description: "Temukan ramuan herbal yang membantu mengatasi masalah pencernaan seperti maag, diare, sembelit, dan lainnya.",
      image: pencernaan,
      conditions: [
        { id: 1, name: "Maag", image: "https://placehold.co/200x300?text=Maag" },
        { id: 2, name: "Diare", image: "https://placehold.co/200x300?text=Diare" },
        { id: 3, name: "Sembelit", image: "https://placehold.co/200x300?text=Sembelit" },
        { id: 4, name: "Mual", image: "https://placehold.co/200x300?text=Mual" },
      ]
    },
    3: {
      title: "Penyakit Kulit",
      description: "Temukan ramuan herbal yang membantu mengatasi masalah pencernaan seperti maag, diare, sembelit, dan lainnya.",
      image: kulit,
      conditions: [
        { id: 1, name: "Jerawat", image: "https://placehold.co/200x300?text=Maag" },
        { id: 2, name: "Kudis", image: "https://placehold.co/200x300?text=Diare" },
        { id: 3, name: "Kurap", image: "https://placehold.co/200x300?text=Sembelit" },
        { id: 4, name: "Biduran", image: "https://placehold.co/200x300?text=Mual" },
      ]
    },
    4: {
      title: "Penyakit Imunitas",
      description: "Temukan ramuan herbal yang membantu mengatasi masalah pencernaan seperti maag, diare, sembelit, dan lainnya.",
      image: imunitas,
      conditions: [
        { id: 1, name: "Pilek atau Flu", image: "https://placehold.co/200x300?text=Maag" },
        { id: 2, name: "Alergi Ringan", image: "https://placehold.co/200x300?text=Diare" },
        { id: 3, name: "Psoriasis", image: "https://placehold.co/200x300?text=Sembelit" },
        { id: 4, name: "Lupus", image: "https://placehold.co/200x300?text=Mual" },
      ]
    },
    5: {
      title: "Penyakit Metabolisme",
      description: "Temukan ramuan herbal yang membantu mengatasi masalah pencernaan seperti maag, diare, sembelit, dan lainnya.",
      image: metabolisme,
      conditions: [
        { id: 1, name: "Kolesterol Tinggi", image: "https://placehold.co/200x300?text=Maag" },
        { id: 2, name: "Hipertensi ", image: "https://placehold.co/200x300?text=Diare" },
        { id: 3, name: "Obesitas ", image: "https://placehold.co/200x300?text=Sembelit" },
        { id: 4, name: "Asam Urat ", image: "https://placehold.co/200x300?text=Mual" },
      ]
    },
    6: {
      title: "Penyakit Hormonal dan Reproduksi",
      description: "Temukan ramuan herbal yang membantu mengatasi masalah pencernaan seperti maag, diare, sembelit, dan lainnya.",
      image: hormon,
      conditions: [
        { id: 1, name: "Sindrom Ovarium Polikistik", image: "https://placehold.co/200x300?text=Maag" },
        { id: 2, name: "Amenorea (Tidak Menstruasi)", image: "https://placehold.co/200x300?text=Diare" },
        { id: 3, name: "Disfungsi Ereksi (Impotensi)", image: "https://placehold.co/200x300?text=Sembelit" },
        { id: 4, name: "Nyeri Menstruasi (Dismenorea)", image: "https://placehold.co/200x300?text=Mual" },
      ]
    },
    7: {
      title: "Penyakit Sendi dan Otot",
      description: "Temukan ramuan herbal yang membantu mengatasi masalah pencernaan seperti maag, diare, sembelit, dan lainnya.",
      image: sendi,
      conditions: [
        { id: 1, name: "Nyeri Otot", image: "https://placehold.co/200x300?text=Maag" },
        { id: 2, name: "Sakit Punggung", image: "https://placehold.co/200x300?text=Diare" },
        { id: 3, name: "Kram Otot", image: "https://placehold.co/200x300?text=Sembelit" },
        { id: 4, name: "Asam Urat", image: "https://placehold.co/200x300?text=Mual" },
      ]
    },
    8: {
      title: "Gangguan Saraf",
      description: "Temukan ramuan herbal yang membantu mengatasi masalah pencernaan seperti maag, diare, sembelit, dan lainnya.",
      image: saraf,
      conditions: [
        { id: 1, name: "Sakit Kepala ", image: "https://placehold.co/200x300?text=Maag" },
        { id: 2, name: " Insomnia", image: "https://placehold.co/200x300?text=Diare" },
        { id: 3, name: "Migrain", image: "https://placehold.co/200x300?text=Sembelit" },
        { id: 4, name: "Depresi Ringan dan Kecemasan", image: "https://placehold.co/200x300?text=Mual" },
      ]
    },
    9: {
      title: "Penyakit Ginjal dan Saluran Kemih",
      description: "Temukan ramuan herbal yang membantu mengatasi masalah pencernaan seperti maag, diare, sembelit, dan lainnya.",
      image: ginjal,
      conditions: [
        { id: 1, name: "Infeksi Saluran Kemih", image: "https://placehold.co/200x300?text=Maag" },
        { id: 2, name: "Batu Ginjal", image: "https://placehold.co/200x300?text=Diare" },
        { id: 3, name: " Gagal Ginjal", image: "https://placehold.co/200x300?text=Sembelit" },
        { id: 4, name: "Prostatitis", image: "https://placehold.co/200x300?text=Mual" },
      ]
    },
    
  
};

const IdentifikasiPenyakit = () => {
  const { id } = useParams();
  const category = conditionsData[id];
  const navigate = useNavigate(); // Inisialisasi useNavigate

  if (!category) {
    return <div>Category not found</div>;
  }



const handleConditionClick = (conditionName) => {
  const formattedName = conditionName.toLowerCase().replace(/\s+/g, '-'); // Ubah spasi menjadi -
  navigate(`/penyakit/${formattedName}`);
};

return (
  <>
      <Navbar />

      <div className="text-center mt-10">
          <img alt={category.title} className="mx-auto mb-4" height="100" src={category.image} width="100" />
          <h1 className="text-2xl font-bold text-green-900 mb-4">
              {category.title}
          </h1>
          <p className="text-green-900 max-w-2xl mx-auto">
              {category.description}
          </p>
      </div>

      <div className="flex justify-center mt-8 space-x-4">
          {category.conditions.map((condition, index) => (
              <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden w-48 cursor-pointer"
                  onClick={() => handleConditionClick(condition.name)} // Menambahkan event onClick di sini
              >
                  <img src={condition.image} alt={condition.name} className="w-full h-64 object-cover" />
                  <div className="p-4 bg-gradient-to-t from-green-900 to-transparent text-white text-center">
                      {condition.name}
                  </div>
              </div>
          ))}
      </div>

      <div className="mt-8 text-center">
          <a href="/resep-ramuan" className="text-green-600 flex items-center pl-28 pb-10">
              <FaArrowLeft className="mr-2" />
              Back
          </a>
      </div>

      <Footer />
  </>
);
};

export default IdentifikasiPenyakit;
