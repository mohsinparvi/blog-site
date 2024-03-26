import heroImage from "../../../assets/hero/hero.svg";
import search from "../../../assets/icons/search.svg";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-4">
      <div className="space-y-4">
        <h1 className="font-bold text-6xl text-secondary">
          Read the most interesting articles
        </h1>
        <p className="font-medium text-lg text-secondary">
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
        <div>
          <h2>Popular Tags :</h2>
          <p>design</p>
        </div>
      </div>
      <img src={heroImage} alt="hero image" />
    </div>
  );
};

export default Hero;
