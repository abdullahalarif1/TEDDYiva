import useTitle from "../../Shared/UseTitle/UseTitle";
import HappyCustomerSection from "../HappyCustomer/HappyCustomer";
import Trending from "../Trending/TrendingSection";
import Banner from "./Banner";
import Gallary from "./Gallary";
import ShopByCategory from "./ShopByCategory";

const Home = () => {
  useTitle('Home')
  return (
    <div>
      <Banner></Banner>
      <Gallary></Gallary>
      <ShopByCategory></ShopByCategory>
      <Trending></Trending>
      <HappyCustomerSection></HappyCustomerSection>
    </div>
  );
};

export default Home;
