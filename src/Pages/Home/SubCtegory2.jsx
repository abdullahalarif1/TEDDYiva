import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const SubCtegory2 = () => {
  const [fuzzy, setFuzzy] = useState([]);
  const [honey, setHoney] = useState([]);
  const [funskool, setFunskool] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/myToys?text=Fuzzy%20Teddy%20Bear&sort=1")
      .then((res) => res.json())
      .then((data) => setFuzzy(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/myToys?text=Honeypot%20Teddy%20Bear&sort=1")
      .then((res) => res.json())
      .then((data) => setHoney(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/myToys?text=Funskool%20Teddy%20Bear&sort=1")
      .then((res) => res.json())
      .then((data) => setFunskool(data));
  }, []);

  return (
    <>
      <h2
        className="text-3xl py-10 text-center text-[#c7b1fa] font-mono font-bold "
        data-aos="flip-left"
      >
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
                  <Link to={`/detail/${cat._id}`}>
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
                  <Link to={`/detail/${cat._id}`}>
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
                  <Link to={`/detail/${cat._id}`}>
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

        {/*             <div className="grid md:grid-cols-2 gap-5">
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
                  <button className="btn mt-3 btn-outline btn-primary">
                    {" "}
                    View details
                  </button>
                </div>
              ))}
            </div> */}
      </div>
    </>
  );
};

export default SubCtegory2;
