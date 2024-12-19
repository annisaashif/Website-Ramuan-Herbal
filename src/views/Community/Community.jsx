import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import userprof from "../../assets/Community/userprofile.png";
import userprof1 from "../../assets/Community/userprofile2.png";
import userprof2 from "../../assets/Community/userprofile3.png";
import postimg from "../../assets/Community/postimg.png";

function Community() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto mt-6 px-6 mb-20">
        <div className="bg-[#27481C] text-white p-4 rounded-lg flex items-center space-x-4">
          <img
            src={userprof}
            alt="User Avatar"
            className="h-10 w-10 rounded-full"
          />
          <input
            type="text"
            placeholder="Mulai buat postingan"
            className="bg-white text-black placeholder-gray-500 w-full focus:outline-none rounded-lg text-xl placeholder:text-xl p-2 mt-4 mb-4"
          />
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center space-x-4">
              <img
                src={userprof1}
                alt="User Avatar"
                className="h-12 w-12 rounded-full"
              />
              <div>
                <h2 className="font-bold">Nirwandi Lasinggang</h2>
                <p className="text-gray-500">Mahasiswa</p>
              </div>
            </div>
            <p className="mt-4 text-gray-700">
              Sudah pernah mencoba daun kelor? 🌿 Tanaman mungil ini sering
              disebut sebagai superfood karena kaya akan antioksidan, protein,
              vitamin, dan mineral yang luar biasa baik untuk tubuh kita. Daun
              kelor bisa membantu meningkatkan daya tahan tubuh, melawan radikal
              bebas, hingga memperbaiki sistem pencernaan. Bahkan, katanya baik
              juga untuk kecantikan kulit!
            </p>
            <div className="mt-4">
              <img
                src={postimg}
                alt="Image of a person with a plant"
                className="w-full rounded-lg"
              />
            </div>
            <div className="mt-4 flex justify-between items-center text-gray-500">
              <div className="flex items-center space-x-2">
                <i className="fas fa-thumbs-up"></i>
                <span>2.1 Ribu</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-comment"></i>
                <span>10 Komentar</span>
              </div>
            </div>
            <div className="mt-4 flex justify-between items-center border-t-4 border-black pt-4">
              <button className="flex items-center space-x-2 text-gray-700 hover:text-green-700">
                <i className="fas fa-thumbs-up"></i>
                <span>Suka</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-700 hover:text-green-700">
                <i className="fas fa-comment"></i>
                <span>Komentar</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-700 hover:text-green-700">
                <i className="fas fa-share"></i>
                <span>Bagikan</span>
              </button>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center space-x-4">
              <img
                src={userprof2}
                alt="User Avatar"
                className="h-12 w-12 rounded-full"
              />
              <div>
                <h2 className="font-bold">Angling Darma</h2>
                <p className="text-gray-500">Petani</p>
              </div>
            </div>
            <p className="mt-4 text-gray-700">
              Hai, sahabat herbal! 🌿 Siapa yang punya tanaman lidah buaya di
              rumah? Tanaman ini ternyata nggak cuma cantik sebagai penghias,
              tapi juga punya banyak manfaat untuk kesehatan dan kecantikan.✔️
            </p>
            <div className="mt-4 flex justify-between items-center text-gray-500">
              <div className="flex items-center space-x-2">
                <i className="fas fa-thumbs-up"></i>
                <span>8.1 Ribu</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-comment"></i>
                <span>10 Komentar</span>
              </div>
            </div>
            <div className="mt-4 flex justify-between items-center border-t pt-4">
              <button className="flex items-center space-x-2 text-gray-700 hover:text-green-700">
                <i className="fas fa-thumbs-up"></i>
                <span>Suka</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-700 hover:text-green-700">
                <i className="fas fa-comment"></i>
                <span>Komentar</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-700 hover:text-green-700">
                <i className="fas fa-share"></i>
                <span>Bagikan</span>
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
export default Community;
