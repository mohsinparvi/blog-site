import { useDispatch, useSelector } from "react-redux";
import MainLayout from "../../components/main-layout";
import Articles from "./container/articles";
import Cta from "./container/cta";
import Hero from "./container/hero";
import SectionThree from "./container/section-three";
import { RootState } from "../../store";
import { setCount } from "../../store/reducers/count-reducer";

const HomePage = () => {
  const count = useSelector((state: RootState) => state.count);
  const dispatch = useDispatch();
  return (
    <MainLayout>
      <div className="container m-6 ">
        <Hero />
        <div className="flex bg-primary gap-10 py-4">
          <button
            className="bg-secondary p-4"
            onClick={() => dispatch(setCount(count.number - 1))}
          >
            minus
          </button>
          {count.number}
          <button
            className="bg-tertiary p-4"
            onClick={() => dispatch(setCount(count.number + 1))}
          >
            plus
          </button>
        </div>
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
