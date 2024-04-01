import MainLayout from "../../components/main-layout";
import Articles from "./container/articles";
import Cta from "./container/cta";
import Hero from "./container/hero";
import SectionThree from "./container/section-three";

const HomePage = () => {
  return (
    <MainLayout>
      <div className="container m-6 ">
        <Hero />
        <Articles />
        <div className="flex justify-center items-center my-8">
          <Cta />
        </div>
      </div>
      <div>
        <SectionThree />
      </div>
    </MainLayout>
  );
};

export default HomePage;
