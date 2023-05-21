import React, { useEffect, useState } from "react";

const Trending = () => {
  const [trendingToys, setTrendingToys] = useState([]);

  useEffect(() => {
    // Fetch trending teddy toys from the backend API
    fetch("https://toy-marketplace-server-brown-two.vercel.app/trending")
      .then((response) => response.json())
      .then((data) => setTrendingToys(data));
  }, []);

  return (
    <div className="trending-section text-center py-10">
      <h2 className="text-3xl py-16 text-center text-[#c7b1fa] font-mono font-bold ">
        __Trending Teddy Toys__
      </h2>
      <div className="trending-toys flex gap-5 justify-around flex-col md:flex-row items-center ">
        {trendingToys.map((toy) => (
          <div key={toy.id} className="trending-toy">
            <img
              className="w-52 h-52 rounded-full border-2 border-indigo-400"
              src={toy.image}
              alt={toy.name}
            />
            <h3 className="pt-3">{toy.name}</h3>
            <p>Price: ${toy.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
