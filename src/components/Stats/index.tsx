import { motion } from "framer-motion";
import { stats } from "../../constants";

export default function Stats() {
  return (
    <div>
      <div className="mb-6 text-center">
        <h2 className="font-playfair font-extrabold text-primary text-3xl md:text-4xl">
          Community
        </h2>
        <p className="mt-2 text-gray-600 max-w-xl mx-auto">
          A growing community built around sharing and enjoying recipes
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((s, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <div
            key={s.v}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg hover:border-primary/40 transition"
          >
            <div className="font-playfair text-3xl md:text-4xl font-extrabold text-black">
              {s.k}
            </div>
            <div className="mt-2 text-sm text-gray-600">{s.v}</div>
          </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
