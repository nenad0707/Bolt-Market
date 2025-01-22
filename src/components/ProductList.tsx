import { useState } from "react";
import { motion } from "framer-motion";
import { products } from "../data/products"; // Importing products
import ProductCard from "../components/ProductCard";

const categories = ["All", "Electronics", "Sports", "Home", "Fashion"];

const ProductList = () => {
  const [category, setCategory] = useState("All"); // State for selected category
  const [searchTerm, setSearchTerm] = useState(""); // State for search term

  // Filtering products by category and search term
  const filteredProducts = products.filter((product) => {
    const matchesCategory = category === "All" || product.category === category;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container mx-auto px-6 my-8">
      {/* Filter section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)} // Set selected category
              className={`px-4 py-2 rounded-md font-medium transition ${
              category === cat
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
              }`}
              aria-label={`Filter by ${cat} category`}
            >
              {cat}
            </button>
          ))}
        </div>

        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm} // Bind search term state
          onChange={(e) => setSearchTerm(e.target.value)} // Update search term state
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
        />
      </div>

      {/* Product list section */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <ProductCard product={product} /> {/* Render product card */}
            </motion.div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No products found for your search.
          </p>
        )}
      </motion.div>
    </div>
  );
};

export default ProductList;
