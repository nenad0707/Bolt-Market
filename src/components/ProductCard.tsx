import React from "react";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";

interface ProductProps {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
  };
}

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
    };
    addToCart(cartItem);
  };
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-transform transform hover:scale-105"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-indigo-600 mb-2">
          {product.name}
        </h2>
        <p className="text-gray-600 text-sm mb-2">{product.description}</p>
        <p className="text-lg font-bold text-orange-500 mb-4">
          ${product.price.toFixed(2)}
        </p>
        <button
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-orange-500 transition"
          onClick={() => handleAddToCart()}
        >
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
