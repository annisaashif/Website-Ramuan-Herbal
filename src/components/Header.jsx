import headerImage from '../assets/lg-header.png';
import Logo2 from "../assets/logo2.png";

function Header() {
  return (
    <div>
      <div
        className="relative" 
        style={{ height: '450px', // Mengatur tinggi menjadi 300 piksel
          backgroundImage: `url(${headerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center' }}
        >

        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <div className="mb-4">
            {/* Bagian logo di atas tulisan */}
            <img
              src={Logo2}
              alt="Logo Herbal"
              className="w-25 h-25 mb-6" // Menambahkan ukuran dan margin bawah
            />
          </div>
          <h1 className="text-4xl font-bold mb-2">Katalog Tanaman Herbal</h1>
          <p className="text-lg">
            Selamat datang di Katalog Tanaman tempat di mana Anda dapat
            menemukan berbagai informasi tentang tanaman herbal yang ada di
            seluruh indonesia
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
