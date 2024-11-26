import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function ErrorPage() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="text-center p-6 bg-white shadow-lg rounded-md max-w-lg w-full">
        <h1 className="text-4xl font-semibold text-[#27481C]">
          Ups! Halaman Tidak Ditemukan😝
        </h1>
        <p className="text-gray-600 mt-2 mb-6">
          Maaf, halaman yang Anda cari tidak ada atau telah dipindahkan.
        </p>
        <button
          onClick={handleBack}
          className="flex items-center justify-center text-white bg-[#27481C] hover:bg-[#1d3b10] py-2 px-4 rounded-md transition duration-300"
        >
          <FaArrowLeft className="mr-2" size={18} />
          Kembali
        </button>
      </div>
    </div>
  );
}

export default ErrorPage;
