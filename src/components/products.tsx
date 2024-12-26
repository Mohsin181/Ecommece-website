import React from 'react';
import Image from 'next/image';

const Products = () => {
  const products = [
    {
      id: 1,
      imgSrc: "/img5.png",
      title: "Syltherine",
      price: "Rp 2.500.000",
      oldPrice: "Rp 3.500.000",
    },
    {
      id: 2,
      imgSrc: "/img6.png", // Second image added here
      title: "Leviosa",
      price: "Rp 2.500.000",
      oldPrice: "Rp 3.500.000",
    },
    {
      id: 3,
      imgSrc: "/img7.png",
      title: "Lolito",
      price: "Rp 7.000.000",
      oldPrice: "Rp 14.000.000",
    },
    {
      id: 4,
      imgSrc: "/img8.png",
      title: "Respira",
      price: "Rp 500.000",
      oldPrice: "Rp 1.000.000",
    },
  ];

  return (
    <div className="bg-gray-100 p-10">
      <h2 className="text-center text-2xl font-bold mb-8">Our Products</h2>
      <div className="grid grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative bg-white rounded-lg shadow-md overflow-hidden group"
          >
            {/* Product Image */}
            <Image
              src={product.imgSrc}
              alt={product.title}
              width={285}
              height={446}
              className="rounded-t-lg w-full h-full object-cover"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center space-y-3">
              <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
                Add to Cart
              </button>
              <div className="flex space-x-4 text-white">
                <button className="hover:underline">Share</button>
                <button className="hover:underline">Compare</button>
                <button className="hover:underline">Like</button>
              </div>
            </div>

            {/* Product Details */}
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold mt-4">{product.title}</h3>
              <p className="text-gray-500 line-through">{product.oldPrice}</p>
              <p className="text-blue-500 font-bold">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
