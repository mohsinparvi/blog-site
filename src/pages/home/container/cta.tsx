import rightArrow from "../../../assets/icons/right-arrow.svg";
const Cta = () => {
  return (
    <button className="flex items-center gap-4 border border-primary rounded-md px-8 py-2 text-primary text-lg font-semibold">
      More Article
      <img src={rightArrow} alt="rightArrow" />
    </button>
  );
};

export default Cta;
