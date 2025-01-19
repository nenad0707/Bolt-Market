import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const handleRemoveFromCart = (id: string) => {
    removeFromCart(id);
    toast.warn("Removed from cart", { pauseOnHover: false });
  };

  const handleClearCart = () => {
    clearCart();
    toast.warn("Cleared cart", { pauseOnHover: false });
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
        <div className="bg-white rounded-xl shadow-md p-6">
          {cart.map((item) => (
            <motion.div
              key={item.id}
              className="flex items-center justify-between border-b pb-4 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-lg shadow"
                />
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-sm text-gray-500">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
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
              <p className="text-orange font-semibold">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
              <button
                onClick={() => handleRemoveFromCart(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </motion.div>
          ))}
          <div className="flex justify-between items-center mt-6">
            <h2 className="text-2xl font-bold text-indigoBlue">
              Total: ${totalPrice.toFixed(2)}
            </h2>
            <div className="flex space-x-4">
              <button
                onClick={handleClearCart}
                className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600"
              >
                Clear Cart
              </button>
              <button
                className="bg-indigoBlue text-white px-6 py-2 rounded hover:bg-lightBlue"
                onClick={() => navigate("/")}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      )}
    </motion.div>
  );
};

export default CartPage;
