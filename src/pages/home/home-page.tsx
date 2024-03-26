import MainLayout from "../../components/main-layout";
import Articles from "./container/articles";
import Hero from "./container/hero";

const HomePage = () => {
  return (
    <MainLayout>
      <div className="container m-6 ">
        <Hero />
        <Articles />

        <h1>Home Page</h1>
      </div>
    </MainLayout>
  );
};

export default HomePage;
