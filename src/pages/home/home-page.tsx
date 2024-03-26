import MainLayout from "../../components/main-layout";
import Articles from "./container/articles";
import Cta from "./container/cta";
import Hero from "./container/hero";

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
    </MainLayout>
  );
};

export default HomePage;
