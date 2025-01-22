import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { CartProvider } from "./context/CartContext";
import { ToastContainer } from "react-toastify";
import AnimatedRoutes from "./components/AnimatedRoutes";

const App = () => {
  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen">
        <Router>
          {/* Navbar */}
          <Navbar />

          <main className="flex-grow">
            <AnimatedRoutes />
          </main>

          {/* Footer */}
          <Footer />

          {/* ScrollToTop */}
          <ScrollToTop />
        </Router>
      </div>

      {/* Toast Notification Container */}
      <ToastContainer />
    </CartProvider>
  );
};

export default App;
