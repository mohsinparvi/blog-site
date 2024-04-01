import heroImage from "../../../assets/hero/hero.svg";
import search from "../../../assets/icons/search.svg";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-8 my-14 mx-6 xl:mx-auto">
      <div className="space-y-4 w-full lg:w-1/2">
        <h1 className="font-bold text-5xl text-center lg:text-start sm:text-7xl lg:text-6xl text-secondary">
          Read the most interesting articles
        </h1>
        <p className="font-medium text-lg text-secondary text-center lg:text-start">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
        <div className="flex items-center gap-4 ">
          <div className="flex items-center border border-tertiary rounded-md p-2 w-full gap-4">
            <img src={search} alt="search icon" />
            <input
              type="search"
              placeholder="Search article"
              className="w-full focus:outline-none"
            />
          </div>
          <button className="bg-primary text-[#ffffff] capitalize font-semibold text-lg py-2 px-4 rounded-md  ">
            search
          </button>
        </div>
        <div className="flex  lg:items-center flex-col md:flex-row  gap-4 ">
          <h2 className="text-base  font-semibold">Popular Tags :</h2>
          <div className="flex items-center flex-wrap gap-4">
            <p className="bg-[#E3EDFC] text-primary text-base text-center font-semibold px-4 py-2 rounded-md capitalize">
              design
            </p>
            <p className="bg-[#E3EDFC] text-primary text-base text-center font-semibold px-4 py-2 rounded-md capitalize">
              User Experience
            </p>
            <p className="bg-[#E3EDFC] text-primary text-base text-center font-semibold px-4 py-2 rounded-md capitalize">
              User Interfaces
            </p>
          </div>
        </div>
      </div>
      <img
        src={heroImage}
        alt="hero image"
        className=" w-full lg:w-1/2 hidden md:block"
      />
    </div>
  );
};

export default Hero;
