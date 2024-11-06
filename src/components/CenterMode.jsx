import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cimage1 from "../assets/centerMode/Annisa.png";
import Cimage2 from "../assets/centerMode/Aul.png";
import Cimage3 from "../assets/centerMode/Priki.png";
import Cimage4 from "../assets/centerMode/imran.png";
import Cimage5 from "../assets/centerMode/lupi.png";
import Cimage6 from "../assets/centerMode/akbar.png";
import "./CenterMode.css";

function CenterMode() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 200,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="slider-container">
      <h2 className="text-2xl text-[#27481C] text-center font-bold mb-6">
        Tim Visioner di Balik Website Obat Ramuan Tradisional
      </h2>
      <Slider {...settings}>
        <div className="slide">
          <img src={Cimage1} alt="Annisa" />
          <div className="overlay">
            <h3>Annisa Ashifa</h3>
            <p>Universitas Negeri Padang</p>
          </div>
        </div>
        <div className="slide">
          <img src={Cimage2} alt="Aul" />
          <div className="overlay">
            <h3>Aulia Ayun</h3>
            <p>Universitas Brawijaya</p>
          </div>
        </div>
        <div className="slide">
          <img src={Cimage3} alt="Priki" />
          <div className="overlay">
            <h3>Priki Ahmad</h3>
            <p>Universitas Andalas</p>
          </div>
        </div>
        <div className="slide">
          <img src={Cimage4} alt="imran" />
          <div className="overlay">
            <h3>Raden Muh Imran Fatahilah</h3>
            <p>Politeknik Negeri Sriwijaya</p>
          </div>
        </div>
        <div className="slide">
          <img src={Cimage5} alt="lupi" />
          <div className="overlay">
            <h3>Andi Luthfi Moh A</h3>
            <p>Universitas Telkom Surabaya</p>
          </div>
        </div>
        <div className="slide">
          <img src={Cimage6} alt="akbar" />
          <div className="overlay">
            <h3>Akbar Palekori</h3>
            <p>Universitas Telkom Bandung</p>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default CenterMode;
