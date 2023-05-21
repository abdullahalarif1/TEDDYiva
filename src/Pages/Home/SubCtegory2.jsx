import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { AuthContext } from "../../Routes/Provider/AuthProvider";
import Swal from "sweetalert2";

const SubCtegory2 = () => {
  const [fuzzy, setFuzzy] = useState([]);
  const [honey, setHoney] = useState([]);
  const [funskool, setFunskool] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(
      "https://toy-marketplace-server-brown-two.vercel.app/myToys?text=Fuzzy%20Teddy%20Bear&sort=1"
    )
      .then((res) => res.json())
      .then((data) => setFuzzy(data));
  }, []);

  useEffect(() => {
    fetch(
      "https://toy-marketplace-server-brown-two.vercel.app/myToys?text=Honeypot%20Teddy%20Bear&sort=1"
    )
      .then((res) => res.json())
      .then((data) => setHoney(data));
  }, []);

  useEffect(() => {
    fetch(
      "https://toy-marketplace-server-brown-two.vercel.app/myToys?text=Funskool%20Teddy%20Bear&sort=1"
    )
      .then((res) => res.json())
      .then((data) => setFunskool(data));
  }, []);

  const handleToast = () => {
    if (!user) {
      Swal.fire({
        title: "You have to log in first to view details",
        text: "Do you want to continue",
        icon: "warning",
        confirmButtonText: "continue",
      });
    }
  };

  return (
    <div>
      <h2
        className="text-3xl py-10 text-center text-[#c7b1fa] font-mono font-bold "
        data-aos="flip-left"
      >
        __Shop By Category__
      </h2>
      <div className="w-full md:px-12">
        <Tabs>
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
              {fuzzy.slice(0, 2).map((cat) => (
                <div key={cat._id} className="border card  p-3 text-center">
                  <img
                    className="w-full h-[500px] rounded-xl p-2"
                    src={cat.pictureUrl}
                    alt=""
                  />
                  <h1 className="text-2xl font-bold text-[#c7b1fa] font-mono py-2">
                    {cat.name}
                  </h1>
                  <p>${cat.price}</p>
                  <p>Ratings: {cat.rating}</p>
                  <Link onClick={handleToast} to={`/detail/${cat._id}`}>
                    <button className="btn mt-3 btn-outline btn-primary">
                      {" "}
                      View details
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-2 gap-5">
              {honey.slice(0, 2).map((cat) => (
                <div key={cat._id} className="border card  p-3 text-center">
                  <img
                    className="w-full h-[500px] rounded-xl p-2"
                    src={cat.pictureUrl}
                    alt=""
                  />
                  <h1 className="text-2xl font-bold text-[#c7b1fa] font-mono py-2">
                    {cat.name}
                  </h1>
                  <p>${cat.price}</p>
                  <p>Ratings: {cat.rating}</p>
                  <Link onClick={handleToast} to={`/detail/${cat._id}`}>
                    <button className="btn mt-3 btn-outline btn-primary">
                      {" "}
                      View details
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-2 gap-5">
              {funskool.slice(0, 2).map((cat) => (
                <div key={cat._id} className="border card  p-3 text-center">
                  <img
                    className="w-full h-[500px] rounded-xl p-2"
                    src={cat.pictureUrl}
                    alt=""
                  />
                  <h1 className="text-2xl font-bold text-[#c7b1fa] font-mono py-2">
                    {cat.name}
                  </h1>
                  <p>${cat.price}</p>
                  <p>Ratings: {cat.rating}</p>
                  <Link onClick={handleToast} to={`/detail/${cat._id}`}>
                    <button className="btn mt-3 btn-outline btn-primary">
                      {" "}
                      View details
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default SubCtegory2;
