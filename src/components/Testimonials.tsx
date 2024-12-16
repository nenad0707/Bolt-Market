import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Michael Brown",
    role: "Frequent Shopper",
    image: "src/assets/images/michael.jpg",
    testimony:
      "Bolt Market has the best variety of electronics at unbeatable prices. Highly recommend for tech lovers!",
  },
  {
    name: "Holden Davis",
    role: "Loyal Customer",
    image: "src/assets/images/holden.jpg",
    testimony:
      "I've been shopping at Bolt Market for years and I'm always impressed with the quality of products and customer service.",
  },
  {
    name: "John Johnson",
    role: "Loyal Customer",
    image: "src/assets/images/john.jpg",
    testimony:
      "Bolt Market's customer service is exceptional. They always go above and beyond to ensure I'm satisfied with my purchases.",
  },
  {
    name: "Emily Johnson",
    role: "Verified Buyer",
    image: "src/assets/images/emily.jpg",
    testimony:
      "The clothing section is my favorite! Stylish, affordable, and delivery is always on time.",
  },
  {
    name: "Sara Smith",
    role: "Happy Customer",
    image: "src/assets/images/sara.jpg",
    testimony:
      "I ordered kitchen essentials and everything arrived quickly and perfectly packaged. Great quality and service!",
  },
];

const Testimonials = () => {
  const extendedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="bg-lightGray text-gray-600 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-indigoBlue mb-8">
          What Our Customers Say
        </h2>

        <div className="overflow-hidden relative">
          <motion.div
            className="flex"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {extendedTestimonials.map((item, index) => (
              <div key={index} className="p-4 md:w-1/3 w-full flex-shrink-0">
                <div className="h-[300px] bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="block w-8 h-8 text-indigo-400 mb-4 mx-auto"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>

                  <p className="text-center leading-relaxed mb-4">
                    {item.testimony}
                  </p>

                  <div className="flex items-center justify-center">
                    <img
                      alt={item.name}
                      src={item.image}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="ml-4 text-center">
                      <h3 className="font-medium text-gray-900">{item.name}</h3>
                      <p className="text-sm text-gray-500">{item.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
