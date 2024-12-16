import Counter from "./Counter";

const statistics = [
  { id: 1, value: 1500, label: "Happy Customers", icon: "😀" },
  { id: 2, value: 500, label: "Products Available", icon: "📦" },
  { id: 3, value: 1200, label: "Orders Shipped", icon: "🚚" },
  { id: 4, value: 98, label: "Positive Feedback (%)", icon: "👍" },
];

const Statistics = () => {
  return (
    <section className="bg-lightGray py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-indigoBlue mb-8">
          Our Statistics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {statistics.map((stat) => (
            <div
              key={stat.id}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
            >
              <div className="text-5xl mb-2">{stat.icon}</div>
              <h3 className="text-4xl font-bold text-indigo-700">
                <Counter value={stat.value} />
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
