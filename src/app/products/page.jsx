import Image from "next/image";

const Products = async () => {
  const products = await fetch(
    "https://latkanproductapi.vercel.app/api/products"
  );
  const data = await products.json();

  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Products</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data?.Products?.map((product) => (
            <div
              key={product?.id}
              className="border p-2 md:p-4 rounded-lg shadow-lg"
            >
              <div className="w-full flex items-center justify-center mb-4">
                <Image
                  width={200}
                  height={300}
                  priority
                  src={product?.image}
                  alt={product?.name}
                  className="object-contain mb-4 rounded-lg"
                />
              </div>
              <h2 className="text-xl font-semibold">{product?.name}</h2>
              <p className="text-gray-700">{product?.price}</p>
              <p className="text-gray-700">{product?.category}</p>
              <p className="text-gray-500">{product?.description}</p>
              <div className="my-2">
                <button
                  type="button"
                  className="bg-blue-600 p-2 text-white rounded-lg"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
