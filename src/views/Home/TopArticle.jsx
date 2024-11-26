import toped1 from "../../assets/HomeImg/ed1.png";
import toped2 from "../../assets/HomeImg/ed2.png";
import toped3 from "../../assets/HomeImg/ed3.png";
import toped4 from "../../assets/HomeImg/ed4.png";

function TopArticle() {
  return (
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
            src={toped1}
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
            src={toped2}
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
            src={toped3}
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
            src={toped4}
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
  );
}

export default TopArticle;
