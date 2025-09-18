import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { features } from "../../constants";

export default function Hero() {
  return (
    <div className="text-black relative min-w-screen grid max-w-6xl grid-cols-1 gap-10 px-6 py-20 md:grid-cols-2 md:items-center md:gap-14 md:px-10 lg:px-12">
      <img
        src="/cooking2.JPG"
        alt="Kitchen background"
        className="absolute inset-0 h-full w-full object-cover object-[30%_50%] md:object-center"
      />
        <div className="absolute inset-0 bg-white/15"></div> 


      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-12 md:grid-cols-2 md:items-center md:gap-12 md:px-10 lg:px-12">
        <div className="max-w-xl p-5 rounded-2xl p-6">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-rose-100 px-3 py-1 text-rose-700">
            <Sparkles className="h-4 w-4" />
            <span className="text-xs font-semibold">Cook • Share • Inspire</span>
          </div>

          <h1 className="mb-3 font-lobster text-3xl md:text-4xl text-white drop-shadow-sm">
            About <span className="text-primary">Nom Nom</span>
          </h1>

          <p className="mb-6 md:text-lg text-white font-semibold">
            Nom Nom is your cozy kitchen corner to discover, create, and share delicious recipes.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/recipes/add"
              className="shrink-0 rounded-full bg-primary px-6 py-3 font-worksans uppercase text-white font-semibold hover:bg-[#732c4e] transition"
            >
              Share Your Recipe
            </Link>
            <Link
              to="/recipes"
              className="shrink-0 rounded-full shadow-sm px-6 py-3 font-worksans uppercase font-semibold text-[#732c4e] bg-white hover:bg-gray-100 transition"
            >
              Explore
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-6">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-gray-200 bg-cream/95 p-4 shadow-sm hover:shadow-md transition"
            >
              <f.icon className="h-6 w-6 text-primary" />
              <h3 className="mt-3 font-semibold">{f.title}</h3>
              <p className="mt-1 text-sm text-gray">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
