import React from "react";

const HappyCustomerSection = () => {
  const teddyBear = {
    id: 12345,
    name: "Fluffy Teddy Bear",
    description:
      "A cuddly and adorable teddy bear with soft fur, perfect for snuggling.",
    color: "Brown",
    size: "Medium",
    price: 19.99,
    available: true,
    image:
      "https://images.pexels.com/photos/7978882/pexels-photo-7978882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["toy", "plush", "gift"],
    image2:
      "https://images.pexels.com/photos/1860160/pexels-photo-1860160.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: ["toy", "plush", "gift"],
    image3:
      "https://plus.unsplash.com/premium_photo-1681491002475-94f7b2aa71cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    tags: ["toy", "plush", "gift"],
    image4:
      "https://plus.unsplash.com/premium_photo-1661891972343-6457b4590207?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMHRlZGR5fGVufDB8fDB8fHww&w=1000&q=80",
    tags: ["toy", "plush", "gift"],
    image5:
      "https://images.unsplash.com/photo-1608189617989-7914461e9f33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8&w=1000&q=80",
    tags: ["toy", "plush", "gift"],
    image6:
      "https://images.unsplash.com/photo-1553364851-7de6d86102c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8&w=1000&q=80",
    tags: ["toy", "plush", "gift"],
    image7:
      "https://images.pexels.com/photos/3348751/pexels-photo-3348751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["toy", "plush", "gift"],
    image8:
      "https://thumbs.dreamstime.com/b/holding-bear-little-girl-her-teddy-32927763.jpg",
    tags: ["toy", "plush", "gift"],
    image9:
      "https://images.unsplash.com/photo-1658251254016-e01a6441b0c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    tags: ["toy", "plush", "gift"],
    image10:
      "https://plus.unsplash.com/premium_photo-1669589659578-be29a063712d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRveXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    tags: ["toy", "plush", "gift"],
  };

  return (
    <div className="md:mx-12 px-10 border-2  rounded-xl">
      <h2 className="text-3xl py-16 text-center text-[#c7b1fa] font-mono font-bold ">
        __Our Happy Customers__
      </h2>
      <div
        className="card justify-center gap-4 items-center grid sm:grid-cols-3 pb-10 md:grid-cols-5"
        data-aos="flip-left"
      >
        <img
          className="w-52 rounded-3xl p-2 h-82 border-4 border-indigo-300 "
          src={teddyBear.image}
          alt={teddyBear.name}
        />
        <img
          className="w-52 rounded-3xl p-2 h-82 h-[300px] border-4 border-indigo-300 "
          src={teddyBear.image2}
          alt={teddyBear.name}
        />
        <img
          className="w-52 rounded-3xl p-2 h-82 h-[300px] border-4 border-indigo-300 "
          src={teddyBear.image3}
          alt={teddyBear.name}
        />
        <img
          className="w-52 rounded-3xl h-82 p-2 h-[300px] border-4 border-indigo-300 "
          src={teddyBear.image4}
          alt={teddyBear.name}
        />
        <img
          className="w-52 rounded-3xl h-82 p-2 h-[300px] border-4 border-indigo-300 "
          src={teddyBear.image5}
          alt={teddyBear.name}
        />
        <img
          className="w-52 rounded-3xl h-82 p-2 h-[300px] border-4 border-indigo-300 "
          src={teddyBear.image6}
          alt={teddyBear.name}
        />
        <img
          className="w-52 rounded-3xl h-[300px] border-4 border-indigo-300  "
          src={teddyBear.image7}
          alt={teddyBear.name}
        />
        <img
          className="w-52 rounded-3xl h-82 p-2 h-[300px] border-4 border-indigo-300 "
          src={teddyBear.image8}
          alt={teddyBear.name}
        />
        <img
          className="w-52 rounded-3xl h-82 p-2 h-[300px] border-4 border-indigo-300 "
          src={teddyBear.image9}
          alt={teddyBear.name}
        />
        <img
          className="w-52 rounded-3xl h-82 p-2 h-[300px] border-4 border-indigo-300 "
          src={teddyBear.image10}
          alt={teddyBear.name}
        />
      </div>
    </div>
  );
};

export default HappyCustomerSection;
