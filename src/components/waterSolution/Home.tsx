export default function HomeHero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center pt-20">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif text-[#CDAD7D]">
          PFAS and Heavy Metals Organic Water Filtration
        </h1>
        <p className="mt-4 text-base sm:text-lg lg:text-xl text-white max-w-2xl">
          We work with you to create the world’s next PFAS water filtration
          systems.
        </p>
      </div>
    </section>
  );
}
