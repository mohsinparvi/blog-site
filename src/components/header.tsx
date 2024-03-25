import logo from "../assets/logo.svg";
import hamburger from "../assets/icons/hamburger.svg";

const Header = () => {
  const menuItems = [
    {
      id: 1,
      title: "Home",
      link: "/",
    },
    {
      id: 2,
      title: "articles",
      link: "/",
    },
    {
      id: 3,
      title: "pages",
      link: "/",
    },
    {
      id: 4,
      title: "Pricing",
      link: "/",
    },
    {
      id: 5,
      title: "Faq",
      link: "/",
    },
  ];
  return (
    <nav className="container ">
      <div className="flex justify-between items-center py-10 mx-6 xl:mx-auto ">
        <img src={logo} alt="logo" />
        <div className="flex items-center space-x-4">
          <ul className="hidden lg:flex items-center space-x-4 text-secondary ">
            {menuItems.map((item) => (
              <li key={item.id} className="capitalize text-base font-semibold">
                {item.title}
              </li>
            ))}
            <button className="text-primary border border-primary rounded-full px-4 py-2 text-base font-semibold">
              Sign in
            </button>
          </ul>
          <img src={hamburger} alt="menu" className="block lg:hidden" />
        </div>
      </div>
      <div>{/* <img src={hamburger} alt="menu" /> */}</div>
    </nav>
  );
};

export default Header;
