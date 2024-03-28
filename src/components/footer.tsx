import logo from "../assets/logo.svg";
import FooterItem from "./footer/footer-item";
const Footer = () => {
  const products = [
    {
      id: 1,
      title: "Landingpage",
      link: "/",
    },
    {
      id: 2,
      title: "Features",
      link: "/",
    },
    {
      id: 3,
      title: "Documentation",
      link: "/",
    },
    {
      id: 4,
      title: "Referral Program",
      link: "/",
    },
    {
      id: 5,
      title: "Pricing",
      link: "/",
    },
  ];
  const Services = [
    {
      id: 1,
      title: "Documentation",
      link: "/",
    },
    {
      id: 2,
      title: "Design",
      link: "/",
    },
    {
      id: 3,
      title: "Themes",
      link: "/",
    },
    {
      id: 4,
      title: "Illustrations",
      link: "/",
    },
    {
      id: 5,
      title: "UI Kit",
      link: "/",
    },
  ];
  const Company = [
    {
      id: 1,
      title: "About",
      link: "/",
    },
    {
      id: 2,
      title: "Terms",
      link: "/",
    },
    {
      id: 3,
      title: "Privacy Policy",
      link: "/",
    },
    {
      id: 4,
      title: "Careers",
      link: "/",
    },
  ];
  const More = [
    {
      id: 1,
      title: "Documentation",
      link: "/",
    },
    {
      id: 2,
      title: "License",
      link: "/",
    },

    {
      id: 3,
      title: "Changelog",
      link: "/",
    },
  ];
  return (
    <footer className="bg-tertiary">
      <div className="max-w-[1140px] m-auto w-full">
        <div className="flex  justify-between py-20">
          <div className="flex flex-col space-y-4 ">
            <img src={logo} alt="logo" className="w-1/2" />
            <p className="text-sm text-[#5A7184]">
              Build a modern and creative website with moonfo
            </p>
            <div className="flex gap-2">
              <div className="bg-[#FC5A5A] rounded-full h-8 w-8"></div>
              <div className="bg-[#FC5A5A] rounded-full h-8 w-8"></div>
              <div className="bg-[#FC5A5A] rounded-full h-8 w-8"></div>
              <div className="bg-[#FC5A5A] rounded-full h-8 w-8"></div>
            </div>
          </div>
          <FooterItem title="Product" text={products} />
          <FooterItem title="Services" text={Services} />
          <FooterItem title="Company" text={Company} />
          <FooterItem title="More" text={More} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
