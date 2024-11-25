import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import centerMode from "../assets/centerMode/CM1.png";

function CenterModeCarousel() {
  const settings = {
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "40px",
        },
      },
    ],
  };

  const carouselData = [
    {
      imgSrc: centerMode,
      title: "Obat Tradisional Aman Tanpa Bahan Kimia Obat",
      description: "Hotel Garden Palace, Sanggau pada Rabu, 28 Februari 2024",
    },
    {
      imgSrc: centerMode,
      title: "Herbal Product 2",
      description: "Info terkini tentang produk herbal terbaik.",
    },
    {
      imgSrc: centerMode,
      title: "Herbal Product 3",
      description: "Manfaat herbal untuk kesehatan tubuh.",
    },
    {
      imgSrc: centerMode,
      title: "Herbal Product 4",
      description: "Inovasi baru dalam pengobatan herbal.",
    },
  ];

  return (
    <div className="carousel-container py-10">
      <h2 className="text-2xl text-[#27481C] text-center font-bold mb-6">
        Berita Terkini
      </h2>
      <p className="text-center mb-5 text-[#11C3314]">
        Info terbaru tentang tren herbal, inovasi kesehatan alami, dan manfaat
        tumbuhan tradisional untuk gaya hidup sehat
      </p>
      <Slider {...settings}>
        {carouselData.map((item, index) => (
          <div className="carousel-item" key={index}>
            <img
              src={item.imgSrc}
              alt={`Product ${index + 1}`}
              className="carousel-image"
            />
            <h5>{item.title}</h5>
            <p>{item.description}</p>
          </div>
        ))}
      </Slider>
      {/* Tombol Selengkapnya */}
      <div className="text-center mt-6">
        <button className="btn-selengkapnya">Selengkapnya</button>
      </div>
    </div>
  );
}

export default CenterModeCarousel;
