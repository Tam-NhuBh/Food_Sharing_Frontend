import { CheckCircle } from "lucide-react";
import { quickStats } from "../../constants";
import { motion } from "framer-motion";

export default function QuickStats() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6 text-center">
        <h2 className="font-playfair font-extrabold text-primary text-3xl md:text-4xl">
          Quick starts
        </h2>
        <p className="mt-2 text-gray-600 max-w-xl mx-auto">
          Follow these essentials and begin your cooking journey today.
        </p>
      </div>

      <div className="grid gap-3 md:grid-cols-2">

        {quickStats.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
          >
            <li
              key={item}
              className="flex items-center gap-2 text-sm text-black"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-rose-100">
                <CheckCircle className="h-4 w-4 text-primary" />
              </span>
              {item}
            </li>
          </motion.div>

        ))}
      </div>
    </div>
  );
}
