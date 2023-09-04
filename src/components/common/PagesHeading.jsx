const PagesHeading = ({ children }) => {
  return (
    <div
      // data-aos="fade-left"
      className="w-fit mx-auto pr-2 md:pr-3 md:pb-3 text-2xl md:text-5xl font-bold my-5 md:my-12 flex items-center"
    >
      <p className="animate-fade-right text-teal-300 text-3xl md:text-6xl">
        {"<"}
      </p>
      <h1 className=" text-center uppercase">{children} </h1>
      <p className="animate-fade-left text-teal-300 text-3xl md:text-6xl">
        {"/>"}
      </p>
    </div>
  );
};

export default PagesHeading;
