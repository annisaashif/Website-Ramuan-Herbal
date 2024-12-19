import "./Home/Home.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer.jsx";
import SearchInput from "./Home/SearchInput";
import CenterModeCarousel from "../components/CenterModeCarousel.jsx";
import CenterMode from "../components/CenterMode.jsx";
import Image1 from "../assets/HomeImg/image.png";
import video1 from "../assets/homevid.mp4";
import Image2 from "../assets/HomeImg/image (1).png";
import Image3 from "../assets/HomeImg/image (2).png";
import Image4 from "../assets/HomeImg/image (3).png";
import TopPopuler from "./Home/TopPopuler.jsx";
import TopArticle from "./Home/TopArticle.jsx";

function HomePage() {
  return (
    <>
      <Navbar />
      <MainPage />
    </>
  );
}
export default HomePage;

function MainPage() {
  return (
    <main className="bg-gray-100 ">
      <section className="hero flex flex-col md:flex-row items-center justify-center py-12 px-10 space-y-10 md:space-y-0 md:space-x-10">
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
        <div className="hero-images grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 md:mt-0">
          <img
            src={Image1}
            alt="Image 1"
            className="rounded-md w-full h-auto"
          />
          <img
            src={Image2}
            alt="Image 2"
            className="rounded-md w-full h-auto"
          />
          <img
            src={Image3}
            alt="Image 3"
            className="rounded-md w-full h-auto"
          />
          <img
            src={Image4}
            alt="Image 4"
            className="rounded-md w-full h-auto"
          />
        </div>
      </section>
      <section className="about flex flex-col md:flex-row items-center justify-center py-2 px-10 space-y-10 md:space-y-0 md:space-x-10">
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
          <h2 className="text-2xl font-bold text-[#27481C] mb-4">
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
      <TopArticle />
      <CenterModeCarousel />
      <CenterMode />
      <Footer />
    </main>
  );
}
