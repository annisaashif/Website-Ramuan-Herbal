import categories from "./components/CategoryList"

function Kategori() {
  return (
    <div>
       <div className="container mx-auto py-10">
                    <h1 className="text-3xl font-bold text-center text-green-800 mb-8">Kategori Tanaman Herbal</h1>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {categories.map((category, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                                <img src={category.image} alt={`Image of ${category.name}`} className="w-full h-40 object-cover"/>
                                <div className="p-2 bg-green-800 text-white text-center">
                                    {category.name}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
    </div>
  )
}

export default Kategori
