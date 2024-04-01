import social from "../../../assets/hero/social.svg";
const SectionThree = () => {
  return (
    <div className="bg-tertiary ">
      <div className="container  ">
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between text-white items-center space-y-12  py-10 mx-6">
          <div className="space-y-8">
            <h1 className="text-2xl md:text-5xl font-semibold text-white">
              Get our stories delivered From us to your inbox weekly.
            </h1>
            <div className="flex items-center gap-4">
              <input
                type="text"
                className="focus:outline-none px-2 py-3 rounded w-full "
              />
              <button className="text-lg bg-primary py-3 px-8  capitalize rounded font-semibold">
                search
              </button>
            </div>
            <p className="text-base text-secondary">
              Get a response tomorrow if you submit by 9pm today. If we received
              after 9pm will get a reponse the following day.
            </p>
          </div>

          <img src={social} alt="social" className="hidden md:block" />
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
