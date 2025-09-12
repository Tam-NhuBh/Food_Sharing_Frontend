import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { features } from "../../constants";

export default function Hero() {
  return (
    <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-20 md:grid-cols-2 md:items-center md:gap-14 md:px-10 lg:px-12">
      <img
        alt="Decor"
        src="/cooking.PNG"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-5"
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="z-10"
      >
        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-rose-100 px-3 py-1 text-rose-700">
          <Sparkles className="h-4 w-4" />
          <span className="text-xs font-semibold">Cook • Share • Inspire</span>
        </div>
        <h1 className="text-2xl md:text-4xl font-lobster text-black mb-4">
          About <span className="text-primary">Nom Nom</span>
        </h1>
        <p className="text-lg md:text-xl text-black mb-6">
          Nom Nom is your cozy kitchen corner to discover, create, and share delicious recipes.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/recipes/add"
            className="shrink-0 text-md md:text-xl bg-primary font-playfair text-white px-6 py-3 rounded-full font-bold hover:bg-[#732c4e] transition"
          >
            Share Your Recipe
          </Link>

          <Link
            to="/recipes"
            className="shrink-0 text-md md:text-xl font-playfair text-black px-6 py-3 rounded-full border border-gray-300 font-bold hover:bg-gray-100 transition"
          >
            Explore Recipes
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="z-10"
      >
        <div className="grid grid-cols-2 gap-4 md:gap-6">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition"
            >
              <f.icon className="h-6 w-6 text-primary" />
              <h3 className="mt-3 font-semibold">{f.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
