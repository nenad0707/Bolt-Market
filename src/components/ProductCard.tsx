
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";
import { toast } from "react-toastify";
import { ShoppingCartIcon } from "@heroicons/react/24/outline"; 

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
      id: product.id.toString(),
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
    };
    toast.success("Added to cart", { pauseOnHover: false });
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
        <p className="text-lg font-bold text-orange mb-4">
          ${product.price.toFixed(2)}
        </p>
      <div className="flex justify-center mt-auto">
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-indigo-600 to-lightBlue text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2
              hover:from-orange-500 hover:to-yellow-500
              hover:scale-105 hover:shadow-lg transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() => handleAddToCart()}
          >
            <ShoppingCartIcon className="w-5 h-5" />
            <span>Add to Cart</span>
          </motion.button>
     </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
