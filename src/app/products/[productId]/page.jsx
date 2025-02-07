"use client";

import { useParams } from "next/navigation";
// import Image from "next/image";

const ProductPage = () => {
  const params = useParams(); // ✅ Correct way to access dynamic params in Next.js App Router
  const { productId } = params;

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row items-center">
        <img
          src="https://placehold.co/300"
          alt={productId}
          width={300}
          height={300}
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <div className="md:ml-8 mt-4 md:mt-0">
          <h1 className="text-3xl font-bold">{productId}</h1>
          <p className="text-xl text-gray-700 mt-2">$23</p>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            repellat saepe facere. Ducimus tempore distinctio officiis quaerat
            sint pariatur, cumque voluptas, nisi nemo saepe mollitia cupiditate
            perspiciatis harum quos ipsam! Delectus animi voluptatum voluptates?
            Totam, cupiditate laboriosam modi aut illum voluptatem aliquid?
            Tempore eius, at suscipit magnam commodi placeat? Quibusdam sed nisi
            consequuntur molestias, quae ullam vel voluptas voluptatum
            reiciendis!
          </p>
          <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-lg">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
