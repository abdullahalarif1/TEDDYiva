import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Swal from "sweetalert2";
import { AuthContext } from "../../Routes/Provider/AuthProvider";

const ShopByCategory = () => {
  const { user } = useContext(AuthContext);
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/category")
      .then((res) => res.json())
      .then((data) => setCategory(data[0].category));
  }, []);

  const handleToast = () => {
    if (!user.email) {
      Swal.fire({
        title: "You have to log in first to view details",
        text: "Do you want to continue",
        icon: "warning",
        confirmButtonText: "continue",
      });
    }
  };

  return (
    <>
      <h2 className="text-3xl py-10 text-center text-[#c7b1fa] font-mono font-bold ">
        __Shop By Category__
      </h2>
      <div className="w-full md:px-12">
        <Tabs className="">
          <TabList className="text-center">
            <Tab>
              <span className="  font-mono ">Fuzzy Teddy Bear</span>{" "}
            </Tab>
            <Tab>
              <span className="  font-mono ">Honeypot Teddy Bear</span>{" "}
            </Tab>

            <Tab>
              <span className="  font-mono ">Funskool Teddy Bear</span>{" "}
            </Tab>
          </TabList>

          <TabPanel>
            <div className="grid md:grid-cols-2 gap-5">
              {category?.map((category) => (
                <>
                  {category?.fuzzyTeddy?.map((fuzzy) => (
                    <div
                      key={fuzzy.id}
                      className="border card  p-3 text-center"
                    >
                      <img
                        className="w-full h-[500px] p-2"
                        src={fuzzy.picture}
                        alt=""
                      />
                      <h1 className="text-2xl font-bold text-[#c7b1fa] font-mono py-2">
                        {fuzzy.name}
                      </h1>
                      <p>${fuzzy.price}</p>
                      <p>Ratings: {fuzzy.rating}</p>
                      <Link to={`/detail/${fuzzy.rating}`}>
                        <button
                          onClick={handleToast}
                          className="btn mt-3 btn-outline btn-primary"
                        >
                          {" "}
                          View details
                        </button>
                      </Link>
                    </div>
                  ))}
                </>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-2 gap-5">
              {category?.map((category) => (
                <>
                  {category?.HoneypotTeddy?.map((honey) => (
                    <div
                      key={honey.id}
                      className="border card  p-3 text-center"
                    >
                      <img className="w-full p-2" src={honey.picture} alt="" />
                      <h1 className="text-2xl font-mono text-[#c7b1fa] font-bold py-2">
                        {honey.name}
                      </h1>
                      <p>${honey.price}</p>
                      <p>Ratings: {honey.rating}</p>
                      <Link to={`/detail/${honey.rating}`}>
                        <button className="btn mt-3 btn-outline btn-primary">
                          {" "}
                          View details
                        </button>
                      </Link>
                    </div>
                  ))}
                </>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-2 gap-5">
              {category?.map((category) => (
                <>
                  {category?.FunskoolTeddy?.map((honey) => (
                    <div
                      key={honey.id}
                      className="border card  p-3 text-center"
                    >
                      <img className="w-full p-2" src={honey.picture} alt="" />
                      <h1 className="text-2xl text-[#c7b1fa] font-bold font-mono py-2">
                        {honey.name}
                      </h1>
                      <p>${honey.price}</p>
                      <p>Ratings: {honey.rating}</p>
                      <Link to={`/detail/${honey.rating}`}>
                        <button className="btn mt-3 btn-outline btn-primary">
                          {" "}
                          View details
                        </button>
                      </Link>
                    </div>
                  ))}
                </>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default ShopByCategory;
