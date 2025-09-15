import { ArrowRight } from "lucide-react";
import { faqs } from "../../constants";
import { motion } from "framer-motion";

export default function Faqs() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6 text-center">
        <h2 className="font-playfair font-extrabold text-primary text-3xl md:text-4xl">
          Frequently asked questions
        </h2>
        <p className="mt-2 text-gray-600 max-w-xl mx-auto">
          Answers to common questions about using Nom Nom
        </p>
      </div>
      <div className="divide-y shrink-0 rounded-2xl border border-gray-200 bg-white shadow-sm">
        {faqs.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <details key={i} className="group px-6 py-4">
              <summary className="flex cursor-pointer items-center justify-between font-semibold text-gray-900">
                {f.q}
                <ArrowRight className="shrink-0 h-4 w-4 transition group-open:rotate-90 text-primary" />
              </summary>
              <p className="mt-2 text-sm text-gray-600">{f.a}</p>
            </details>

          </motion.div>
        ))}
      </div>
    </div>
  );
}
