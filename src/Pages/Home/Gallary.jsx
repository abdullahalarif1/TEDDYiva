import React, { useEffect, useState } from "react";

const Gallary = () => {
  const [teddys, setteddys] = useState([]);

  useEffect(() => {
    fetch("gallery.json") // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => setteddys(data));
  }, []);
  return (
    <div
      className="container text-center py-10 mx-auto md:px-12"
      data-aos="flip-left"
    >
      <h2 className="text-3xl text-[#c7b1fa] font-mono font-bold mb-6">
        __Gallery__
      </h2>
      <p className="md:w-1/2 mx-auto font-thin pb-8">
        <small>
          Preserve your toys and make your child-hood memories last.We know that
          your toys are important tp retain the same character and we can make
          sure it will come back tp you healthy and strong for you tp hug and
          love.
        </small>
      </p>
      <div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-4  "
        data-aos="flip-left"
      >
        {teddys.map((teddy) => (
          <div className="card ">
            <img
              key={teddy.id}
              src={teddy.src}
              alt={teddy.alt}
              className="w-full h-full object-cover rounded-md"
            />
            <h2 className="text-left font-bold text-[#c7b1fa] text-2xl font-mono  pt-2">
              {teddy.alt}
            </h2>
            <div className="rating py-2">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <p className="text-left">${teddy.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallary;
