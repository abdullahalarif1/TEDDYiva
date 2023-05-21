import useTitle from "../../Shared/UseTitle/UseTitle";
import HappyCustomerSection from "../HappyCustomer/HappyCustomer";
import Trending from "../Trending/TrendingSection";
import Banner from "./Banner";
import Gallary from "./Gallary";
import ShopByCategory from "../Home/ShopByCategory";

import SubCtegory2 from "./SubCtegory2";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner></Banner>
      <Gallary></Gallary>
      <SubCtegory2></SubCtegory2>
      <Trending></Trending>
      {/* <ShopByCategory></ShopByCategory> */}
      <HappyCustomerSection></HappyCustomerSection>
    </div>
  );
};

export default Home;
