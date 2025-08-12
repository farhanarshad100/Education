import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cartSlice";

export default function ProducSection() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching Product", error));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Product list</h1>
      <div className="flex flex-wrap gap-5">
        {products.map((product) => (
          <div
            key={product.id}
            className="border border-gray-300 p-4 w-52 text-center"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-24 mx-auto object-contain"
            />
            <h4 className="text-sm font-semibold mt-3">
              {product.title.slice(0, 15)}..
            </h4>
            <p className="text-lg font-bold">${product.price}</p>
            <button
              onClick={() => dispatch(addToCart(product))}
              className="mt-2 px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
