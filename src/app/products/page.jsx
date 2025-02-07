const products = [
  {
    id: 1,
    name: "Product 1",
    price: "$10",
    description: "Description for product 1",
  },
  {
    id: 2,
    name: "Product 2",
    price: "$20",
    description: "Description for product 2",
  },
  {
    id: 3,
    name: "Product 3",
    price: "$30",
    description: "Description for product 3",
  },
];

const ProductsPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-700">{product.price}</p>
            <p className="text-gray-500">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
