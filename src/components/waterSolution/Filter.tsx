const Filter = () => {
  return (
    <div className="bg-[#02090D] relative w-full h-full py-20">
      <div className="bg-gradient w-full h-full absolute top-0 left-0 z-0" />

      <div className="flex flex-col items-center justify-center relative">
        <h1 className="text-white font-bold text-3xl text-center lg:text-[3.15rem]">
          Patented Filter Used for PFAS Filtration
        </h1>
        <figure className="md:h-[50rem]">
          <img src="/filter.png" alt="Filter" className="w-full h-full" />
        </figure>
      </div>
    </div>
  );
};

export default Filter;
