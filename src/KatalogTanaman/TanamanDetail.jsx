import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Footer from '../components/footer';
import Navbar from "../components/Navbar";
import Logo from "../assets/logo-detail-kategori.png";
import kemangi from "../assets/kategori-batang/kemangi.png";
import kayu_manis from "../assets/kategori-batang/kayu_manis.png";
import serai from "../assets/kategori-batang/serai.png";
import soka from "../assets/kategori-batang/soka.png";
import bambu from "../assets/kategori-batang/bambu.png";
import ceri from "../assets/kategori-batang/ceri.png";

const plantImages = {
  'Kemangi': kemangi,
  'Kayu Manis': kayu_manis,
  'Serai': serai,
  'Soka': soka,
  'Bambu': bambu,
  'Pohon Ceri': ceri,
};

const categories = {
  'Kemangi': {
    title: 'Kemangi',
    description: 'Tanaman herbal dengan berbagai macam manfaat dari bagian daunnya.',
  },
  'Kayu Manis': {
    title: 'Kayu Manis',
    description: 'Tanaman herbal yang terkenal karena khasiatnya.',
  },
  'Serai': {
    title: 'Serai',
    description: 'Biasa digunakan sebagai rempah dalam masakan.',
  },
  'Bambu': {
    title: 'Bambu',
    description: 'Biasa digunakan dalam konstruksi dan kerajinan.',
  },
  'Pohon Ceri': {
    title: 'Pohon Ceri',
    description: 'Biasa digunakan dalam pembuatan buah ceri.',
  },
  'Soka': {
    title: 'Soka',
    description: 'Biasa digunakan dalam kebun untuk keindahan.',
  },
};

const TanamanDetail = () => {
  const { name } = useParams();
  const plantImage = plantImages[name] || kemangi;
  const category = categories[name] || { title: 'Tanaman Tidak Ditemukan', description: 'Detail tidak tersedia.' };

  // State untuk konten aktif
  const [activeContent, setActiveContent] = useState(null);

  // Fungsi untuk mengubah konten aktif
  const handleButtonClick = (content) => {
    setActiveContent(content);
  };

  // Fungsi untuk menentukan kelas tombol aktif
  const buttonClass = (content) => {
    return activeContent === content ? 'bg-[#1C3314] text-white' : 'bg-white text-gray-900';
  };

  return (
    <>
      <Navbar />
      <div className="relative">
        <img src={Logo} alt="Various dried plants in bowls" className="w-full h-48 object-cover" />
        <div className="absolute inset-0 bg-black opacity-5"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold">{category.title}</h1>
          <p className="text-lg">{category.description}</p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-md rounded-lg overflow-hidden my-10 w-full max-w-5xl flex flex-col items-center">
          <img
            src={plantImage}
            alt={`Gambar dari ${name}`}
            className="w-1/3 h-auto mx-auto mb-3 mt-8"
          />
          <div className="flex justify-between mt-4 mb-4 w-full px-4">
            <button
              className={`flex-1 mx-1 px-4 py-2 border border-gray-300 rounded shadow-sm hover:bg-gray-100 ${buttonClass('pertelaan')}`}
              onClick={() => handleButtonClick('pertelaan')}
            >
              Pertelaan
            </button>
            <button
              className={`flex-1 mx-1 px-4 py-2 border border-gray-300 rounded shadow-sm hover:bg-gray-100 ${buttonClass('ekologi')}`}
              onClick={() => handleButtonClick('ekologi')}
            >
              Ekologi
            </button>
            <button
              className={`flex-1 mx-1 px-4 py-2 border border-gray-300 rounded shadow-sm hover:bg-gray-100 ${buttonClass('budidaya')}`}
              onClick={() => handleButtonClick('budidaya')}
            >
              Budidaya
            </button>
            <button
              className={`flex-1 mx-1 px-4 py-2 border border-gray-300 rounded shadow-sm hover:bg-gray-100 ${buttonClass('kandungan')}`}
              onClick={() => handleButtonClick('kandungan')}
            >
              Kandungan
            </button>
          </div>

          {/* Menampilkan konten berdasarkan tombol yang diklik */}
          <div className="w-full px-4 mt-4">
            {activeContent === 'pertelaan' && (
              <div>
               
                <p>Perawakan terna menahun yang kuat (sebentuk rumput). Berumpun dengan akar yang kuat, tumbuh tegak sampai agak rebah, tinggi mencapai 2 m, batang sejati pendek, beruas-ruas sangat rapat, berwarna merah jika dirilis melintang. Batang semu merupakan kumpulan pelepah daun yang tumbuh tegak, diameter mencapai 1 cm. Daun berbentuk pita, terletak dalam tiga deret, pelepah daun bulat, tidak berambut dengan warna merah keunguan di bagian dalam, pangkal menyempit, tepi rata dan tajam, ujung runcing, permukaan kasar, pertulangan daun sejajar dengan ibu tulang daun yang tampak jelas, putih, helaian daun hijau, berbau khas jika diremas. Perbungaan berupa bunga majemuk malai, karangan bunga berseludang, warna bunga kuning keputihan, cokelat ketika masak. Buah bertipe buah padi, bulat, panjang, pipih, warna putih kekuningan, cokelat ketika masak.</p>
              </div>
            )}
            {activeContent === 'ekologi' && (
              <div>
                
                <p>Serai tumbuh di tanah alluvial pada ketinggian 0-3.00 mpdl. Derajat keasaman tanah (pH) 6,0-7, dan curah hujan 1.800-2.500 mm/tahun.</p>
              </div>
            )}
            {activeContent === 'budidaya' && (
              <div>
               
                <p>Tanaman sere dapat diperbanyak secara vegetatif menggunakan setek atau sobekan rumpun tanaman dewasa yang telah berakar. Setiap lubang tanam dapat diisi dengan 2-3 batang sere, dengan jarak tanam ideal sekitar 1 x 1 meter. Pemeliharaan tanaman meliputi penyiangan, penyulaman, pemupukan, pembumbunan, serta pengendalian hama dan penyakit. Penyiangan dan pembumbunan pertama dilakukan saat tanaman berumur sekitar 1 bulan, dan penggemburan tanah berikutnya dilakukan setelah panen pertama, sebanyak 3-4 kali dalam setahun.</p>
              </div>
            )}
            {activeContent === 'kandungan' && (
              <div>
                
                <p>Tiga komponen utama dari minyak sere murni; yaitu sitral (neral, geranial), mirsen, menunjukkan aktivitas terhadap staphylococcus aureus, bacillus subtilis dan escherichia coli. Mirsen sendiri tidak menunjukkan aktivitas antibakteri yang signifikan, namun mampu meningkatkan aktivitas antibakteri dari neral dan genarial.</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TanamanDetail;
