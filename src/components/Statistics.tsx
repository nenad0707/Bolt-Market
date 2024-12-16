import { motion } from "framer-motion";
import Counter from "./Counter";

const statistics = [
  { id: 1, value: 1500, label: "Happy Customers", icon: "😀" },
  { id: 2, value: 500, label: "Products Available", icon: "📦" },
  { id: 3, value: 1200, label: "Orders Shipped", icon: "🚚" },
  { id: 4, value: 98, label: "Positive Feedback (%)", icon: "👍" },
];

const Statistics = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-indigoBlue mb-8">
          Our Statistics
        </h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {statistics.map((stat) => (
            <motion.div
              key={stat.id}
              className="bg-gradient-to-b from-gray-100 to-white rounded-lg border border-gray-200 shadow-md p-6 flex flex-col items-center"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="text-5xl text-orange mb-2">{stat.icon}</div>
              <h3 className="text-4xl font-bold text-indigoBlue">
                <Counter value={stat.value} />
              </h3>
              <p className="text-gray-700">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Statistics;
