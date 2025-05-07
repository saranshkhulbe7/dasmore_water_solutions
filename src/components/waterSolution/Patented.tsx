const Patented = () => {
  return (
    <div
      id="solutions"
      className="bg-mesh bg-no-repeat bg-cover bg-center bg-fixed text-white px-6 md:px-20 py-20"
    >
      <div className="border rounded-3xl border-white/20 bg-white/10 flex flex-col items-center justify-center lg:justify-between lg:flex-row lg:gap-x-10 overflow-hidden max-w-5xl 2xl:max-w-7xl mx-auto">
        <section className="p-4 sm:p-7 lg:pl-10 space-y-3 w-full max-w-xl 2xl:max-w-3xl">
          <h1 className="text-2xl sm:text-3xl xl:text-5xl font-bold">
            Our Patented Water Filtration Technology
          </h1>
          <p className="text-sm sm:text-lg xl:text-2xl font-medium">
            Our patented technology is a breakthrough in filtering PFAS and
            heavy metals from water, with unparalleled efficiency.
          </p>
        </section>
        <figure className="sm:w-96 lg:w-[30rem] w-full">
          <img src="/patfilter.png" alt="Filter" className="w-full h-full" />
        </figure>
      </div>
    </div>
  );
};

export default Patented;
