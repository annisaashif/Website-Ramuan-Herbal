import "./Home/Home.css";
import Navbar from "../components/Navbar";
import SearchInput from "./Home/SearchInput";
import Image1 from "../assets/HomeImg/image.png";
import video1 from "../assets/homevid.mp4";
import Image2 from "../assets/HomeImg/image (1).png";
import Image3 from "../assets/HomeImg/image (2).png";
import Image4 from "../assets/HomeImg/image (3).png";
import TopPopuler from "./Home/TopPopuler.jsx";

function Homepage() {
  return (
    <>
      <Navbar />
      <MainPage />
    </>
  );
}
export default Homepage;

function MainPage() {
  return (
    <main className="bg-gray-100  min-h-screen">
      <section className="hero flex flex-col md:flex-row items-center justify-center py-20 px-10 space-y-10 md:space-y-0 md:space-x-10">
        <div className="hero-content text-center md:text-left ">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Jelajahi dan temukan rahasia
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
            di dunia Ramuan Tradisional
          </h2>
          <p className="text-gray-600 mb-8">
            Temukan tanaman dan obat herbal yang tepat untuk mendukung
            kesembuhan Anda, dengan panduan informasi lengkap mengenai manfaat,
            cara penggunaan, serta khasiat ramuan tradisional yang telah teruji.
          </p>
          <SearchInput />
        </div>
        <div className="hero-images grid grid-cols-2 gap-4 mt-10 md:mt-0">
          <img src={Image1} alt="Image 1" className="rounded-md" />
          <img src={Image2} alt="Image 2" className="rounded-md" />
          <img src={Image3} alt="Image 3" className="rounded-md" />
          <img src={Image4} alt="Image 4" className="rounded-md" />
        </div>
      </section>
      <section className="about flex flex-col md:flex-row items-center justify-center py-20 px-10 space-y-10 md:space-y-0 md:space-x-10">
        <div className="video-container relative flex-shrink-0 p-2">
          <div className="absolute top-0 left-0 w-20 h-2 bg-[#27481C] z-20"></div>
          <div className="absolute top-0 left-0 w-2 h-20 bg-[#27481C] z-20"></div>
          <video
            autoPlay
            className="relative z-10 w-full h-auto shadow-md"
            muted
            src={video1}
          >
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="about-content text-center md:text-left">
          <h2 className="text-2xl font-bold text-green-900 mb-4">
            Cerita Singkat Tentang Ramuan Tradisional
          </h2>
          <p className="mt-4 text-gray-700 mb-6">
            Ramuan Tradisional adalah platform yang menghadirkan solusi
            kesehatan alami berbasis pengetahuan tradisional yang diwariskan
            dari generasi ke generasi. Ramuan Tradisional menawarkan beragam
            resep ramuan/obat tradisional berdasarkan penyakit yang berbasis
            pengalaman budaya dari berbagai daerah. Ramuan Tradisional
            berkomitmen untuk menghubungkan Anda dengan kekayaan pengetahuan
            tradisional yang terbukti membantu pencegahan dan pengobatan
            penyakit, baik fisik maupun mental.
          </p>
          <button className="mt-6 px-6 py-2 bg-[#27481C] text-white rounded-full">
            Ketahui Lebih Banyak
          </button>
        </div>
      </section>

      <TopPopuler />

      <section>
        <div className="text-center">
          <h2 className="text-2xl font-bold mt-10">Artikel Edukasi</h2>
          <p className="text-gray-600 mt-2">
            Membantu Anda memperluas wawasan tentang manfaat herbal, teknik
            meramu, dan gaya hidup sehat alami
          </p>
        </div>
        <div className="container mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-md shadow-md p-4 w-[293px] min-h-[410px] mx-auto flex flex-col overflow-hidden">
            <img
              src="https://placehold.co/250x250"
              alt="Cover buku 100 Top Tanaman Obat"
              className="rounded-md w-[250px] h-[250px]"
            />
            <h3 className="text-lg font-bold mt-4 text-center">
              100 Top Tanaman Obat
            </h3>
            <p className=" text-gray-600 mt-2 text-sm text-center overflow-wrap break-word flex-grow">
              Sumber daya yang lengkap bagi siapapun yang ingin mengeksplorasi
              dunia pengobatan herbal dan menggunakannya praktis di dalam
              kehidupan sehari-hari.
            </p>
            <button className="bg-[#27481C] text-white py-2 px-4 rounded-md mt-4 self-start">
              Baca Artikel
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-md shadow-md p-4 w-[293px] min-h-[410px] mx-auto flex flex-col overflow-hidden">
            <img
              src="https://placehold.co/250x250"
              alt="Cover buku Vademekum Tanaman Obat"
              className="rounded-md w-[250px] h-[250px]"
            />
            <h3 className="text-lg font-bold mt-4 text-center">
              Vademekum Tanaman Obat
            </h3>
            <p className="text-gray-600 mt-2 text-sm text-center overflow-wrap break-word flex-grow">
              Panduan ini adalah pegangan yang berisi informasi tentang berbagai
              tanaman obat, khasiatnya, cara penggunaannya, manfaatnya, dan cara
              meramunya.
            </p>
            <button className="bg-[#27481C] text-white py-2 px-4 rounded-md mt-4 self-start">
              Baca Artikel
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-md shadow-md p-4 w-[293px] min-h-[410px] mx-auto flex flex-col overflow-hidden">
            <img
              src="https://placehold.co/250x250"
              alt="Cover buku Formularium Ramuan Obat"
              className="rounded-md w-[250px] h-[250px]"
            />
            <h3 className="text-lg font-bold mt-4 text-center">
              Formularium Ramuan Obat
            </h3>
            <p className="text-gray-600 mt-2 text-sm text-center overflow-wrap break-word flex-grow">
              Sumber pengetahuan dan praktik bagi siapa saja yang tertarik pada
              pengobatan herbal dan cara meramunya.
            </p>
            <button className="bg-[#27481C] text-white py-2 px-4 rounded-md mt-4 self-start">
              Baca Artikel
            </button>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-md shadow-md p-4 w-[293px] min-h-[410px] mx-auto flex flex-col overflow-hidden">
            <img
              src="https://placehold.co/250x250"
              alt="Cover buku Acuan Bahan Baku Obat"
              className="rounded-md w-[250px] h-[250px]"
            />
            <h3 className="text-lg font-bold mt-4 text-center">
              Acuan Bahan Baku Obat
            </h3>
            <p className="text-gray-600 mt-2 text-sm text-center overflow-wrap break-word flex-grow">
              Pedoman yang digunakan untuk menentukan kualitas, keamanan, dan
              efektivitas bahan baku dalam pembuatan obat.
            </p>
            <button className="bg-[#27481C] text-white py-2 px-4 rounded-md mt-4 self-start">
              Baca Artikel
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
