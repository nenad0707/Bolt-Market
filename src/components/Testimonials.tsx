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
