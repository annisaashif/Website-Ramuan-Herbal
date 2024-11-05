import { useState } from "react";
import Populerimg from "../../assets/HomeImg/Populerimg.png";

function TopPopuler() {
  const [activeSection, setActiveSection] = useState("resep");

  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  return (
    <section className="mid py-10">
      <div>
        <h1 className="text-2xl text-[#27481C] text-center font-bold">
          Pilihan Terfavorit Ramuan Herbal untuk Kesembuhan Alami
        </h1>
        <p className="text-[#27481C] text-center mt-2">
          Manfaatkan ramuan herbal yang paling dicari dan paling banyak
          digunakan untuk kesehatan, dengan panduan lengkap tentang manfaat dan
          cara pemakaiannya.
        </p>

        {/* MidButton Section */}
        <div className="MidButton mt-4 text-center mb-0 flex justify-center ">
          <button
            onClick={() => handleButtonClick("resep")}
            className={`${
              activeSection === "resep"
                ? "bg-[#27481C] text-white mb-0 rounded-t-md"
                : "bg-[#BCC6B9] text-gray-700 mb-0"
            } py-2 px-4 mx-2  transition-all`}
          >
            Resep Ramuan Populer
          </button>
          <button
            onClick={() => handleButtonClick("tanaman")}
            className={`${
              activeSection === "tanaman"
                ? "bg-[#27481C] text-white mb-0 rounded-t-md"
                : "bg-[#BCC6B9] text-gray-700 mb-0"
            } py-2 px-4 mx-2 transition-all`}
          >
            Tanaman Herbal Favorit
          </button>
          <button
            onClick={() => handleButtonClick("produk")}
            className={`${
              activeSection === "produk"
                ? "bg-[#27481C] text-white mb-0 rounded-t-md"
                : "bg-[#BCC6B9] text-gray-700 mb-0"
            } py-2 px-4 mx-2 transition-all`}
          >
            Produk Herbal Terlaris
          </button>
        </div>
      </div>

      {/* GreenContainer Section */}
      <div className="w-screen bg-[#27481C] text-white py-10 mt-0">
        <div className="greenContainer max-w-6xl mx-auto flex flex-col md:flex-row items-center px-4">
          {activeSection === "resep" && (
            <>
              <img
                src={Populerimg}
                alt="Gambar ramuan populer"
                className="rounded-md mb-4 md:mb-0 md:mr-6"
                style={{ width: "386px", height: "253px" }}
              />
              <div>
                <h2 className="text-2xl font-bold">Ramuan Herbal Populer</h2>
                <p className="mt-4">
                  Dapatkan berbagai resep ramuan herbal yang populer untuk
                  berbagai manfaat kesehatan.
                </p>
                <button className="bg-[#BCC6B9] text-gray-700 py-2 px-4 rounded-md mt-4">
                  Lihat Detail <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </>
          )}

          {activeSection === "tanaman" && (
            <>
              <img
                src={Populerimg}
                alt="Gambar tanaman herbal"
                className="rounded-md mb-4 md:mb-0 md:mr-6"
                style={{ width: "386px", height: "253px" }}
              />
              <div>
                <h2 className="text-2xl font-bold">Tanaman Herbal Favorit</h2>
                <p className="mt-4">
                  Temukan berbagai tanaman herbal yang menjadi favorit dan
                  bermanfaat bagi kesehatan.
                </p>
                <button className="bg-[#BCC6B9] text-gray-700 py-2 px-4 rounded-md mt-4">
                  Lihat Detail <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </>
          )}

          {activeSection === "produk" && (
            <>
              <img
                src={Populerimg}
                alt="Gambar produk herbal"
                className="rounded-md mb-4 md:mb-0 md:mr-6"
                style={{ width: "386px", height: "253px" }}
              />
              <div>
                <h2 className="text-2xl font-bold">Produk Herbal Terlaris</h2>
                <p className="mt-4">
                  Jelajahi produk herbal terlaris yang diminati untuk berbagai
                  kebutuhan kesehatan.
                </p>
                <button className="bg-[#BCC6B9] text-gray-700 py-2 px-4 rounded-md mt-4">
                  Lihat Detail <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default TopPopuler;
