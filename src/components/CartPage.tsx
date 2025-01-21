import { useCart } from "../context/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// Variants for item animation
const itemVariants = {
  initial: { opacity: 0, x: -50 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    x: 50,
    transition: {
      duration: 0.5,
    },
  },
};

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const handleClearCart = () => {
    clearCart();
    toast.success("Cart cleared successfully!");
    navigate("/");
  };
  return (
    <motion.div
      className="max-w-4xl mx-auto px-4 py-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h1 className="text-3xl font-bold text-indigoBlue mb-6 text-center">
        Your Cart
      </h1>

      {cart.length > 0 ? (
        <motion.div
          className="bg-white rounded-xl shadow-md p-6"
          initial="initial"
          animate="animate"
        >
          <AnimatePresence>
            {cart.map((item) => (
              <motion.div
                key={item.id}
                className="grid grid-cols-1 md:grid-cols-5 items-center gap-4 border-b pb-4 mb-4"
                variants={itemVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {/* Product image */}
                <div className="flex justify-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-lg shadow"
                  />
                </div>

                {/* Product information */}
                <div className="text-center md:text-left md:col-span-2">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-sm text-gray-500">
                    ${item.price.toFixed(2)}
                  </p>
                </div>

                {/* Quantity buttons */}
                <div className="flex justify-center items-center space-x-4">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="px-2 py-1 bg-lightGray rounded hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-2 py-1 bg-lightGray rounded hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>

                {/* Price and remove button */}
                <div className="text-center md:text-right">
                  <p className="text-orange font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Total price and buttons */}
          <div className="flex flex-col md:flex-row justify-between items-center mt-6">
            <h2 className="text-2xl font-bold text-indigoBlue mb-4 md:mb-0">
              Total: ${totalPrice.toFixed(2)}
            </h2>
            <div className="flex space-x-4">
              <button
                onClick={handleClearCart}
                className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400"
              >
                Clear Cart
              </button>
              <button
                onClick={() => navigate("/")}
                className="bg-orange text-white px-6 py-2 rounded hover:bg-lightOrange transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                Checkout
              </button>
            </div>
          </div>
        </motion.div>
      ) : (
        <div className="text-center py-20">
          <p className="text-xl text-gray-500">Your cart is empty.</p>
          <button
            onClick={() => navigate("/products")}
            className="mt-4 bg-indigoBlue text-white px-6 py-2 rounded hover:bg-lightBlue transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            Continue Shopping
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default CartPage;
