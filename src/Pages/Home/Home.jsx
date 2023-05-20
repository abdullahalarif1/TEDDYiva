import Trending from "../Trending/TrendingSection";
import Banner from "./Banner";
import Gallary from "./Gallary";
import ShopByCategory from "./ShopByCategory";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Gallary></Gallary>
      <ShopByCategory></ShopByCategory>
      <Trending></Trending>
    </div>
  );
};

export default Home;
