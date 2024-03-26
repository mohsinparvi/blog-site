import logo from "../assets/logo.svg";
import FooterItem from "./footer/footer-item";
const Footer = () => {
  return (
    <footer className="bg-tertiary">
      <div className="max-w-[1140px] m-auto w-full">
        <div className="flex  justify-between py-20">
          <div className="flex flex-col ">
            <img src={logo} alt="logo" />
            <p>Build a modern and creative website with moonfo</p>
            <div className="flex gap-2">
              <div className="bg-[#FC5A5A] rounded-full h-8 w-8"></div>
              <div className="bg-[#FC5A5A] rounded-full h-8 w-8"></div>
              <div className="bg-[#FC5A5A] rounded-full h-8 w-8"></div>
              <div className="bg-[#FC5A5A] rounded-full h-8 w-8"></div>
            </div>
          </div>
          <FooterItem />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
