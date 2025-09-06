import Button from "../../components/Button";
import Input from "../../components/Input";
import ReviewCard from "../../components/Review/ReviewCard";

export default function LandingPage() {
  return (
    <>
      {/* Section 1: Hero with background */}
      <section className="relative flex items-center justify-end px-10 md:px-20 py-16 min-h-[50px] sm:min-h-[500px]">
        {/* Background Image */}
        <img
          src="/cooking.PNG"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />

        <div className="absolute inset-0 bg-white/30 -z-10"></div>
        {/* Content (aligned right) */}
        <div className="sm:pl-40 font-worksans w-full md:w-1/2 text-left sm:text-left relative z-10">
          <h2 className="text-2xl md:text-4xl font-lobster text-primary mb-4">
            Nom Nom
          </h2>
          <p className="text-lg md:text-2xl text-white font-semibold mb-6">
            Find recipes you’ll love, <br /> with the ease you need.
          </p>
          <button className="text-md md:text-xl bg-primary font-playfair text-white px-6 py-3 rounded-full font-bold hover:bg-[#732c4e] transition">
            Explore
          </button>
        </div>
      </section>

      {/* Section 2: Most picked recipe */}
      <section></section>

      {/* Section 3: Sharing your recipe */}
      <section></section>

      {/* Section 4: Random Recipes */}
      <section></section>
    </>
  );
}
