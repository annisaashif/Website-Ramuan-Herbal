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
        <div className="carousel-item">
          <img src={centerMode} alt="Product 1" className="carousel-image" />
          <h5>Obat Tradisional Aman Tanpa Bahan Kimia Obat</h5>
          <p>Hotel Garden Palace, Sanggau pada Rabu, 28 Februari 2024</p>
        </div>
        <div className="carousel-item">
          <img src={centerMode} alt="Product 2" className="carousel-image" />
          <h5>Herbal Product 2</h5>
          <p>Herbal Product 2</p>
        </div>
        <div className="carousel-item">
          <img src={centerMode} alt="Product 3" className="carousel-image" />
          <h5>Herbal Product 3</h5>
          <p>Herbal Product 3</p>
        </div>
        <div className="carousel-item">
          <img src={centerMode} alt="Product 4" className="carousel-image" />
          <h5>Herbal Product 4</h5>
          <p>Herbal Product 4</p>
        </div>
      </Slider>
    </div>
  );
}

export default CenterModeCarousel;
