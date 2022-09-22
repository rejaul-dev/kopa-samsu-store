import React, { useEffect, useState } from "react";
import SingleGun from "../SingleGun/SingleGun";

const AllGun = ({countIncrease}) => {
  const [guns, setGuns] = useState([]);

  //   console.log(guns);
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/mir-hussain/guns/main/data.json")
      .then((res) => res.json())
      .then((data) => setGuns(data));
  }, []);

  return (
    
      <div className="mt-5">
        <div className="my-10 w-[90%] mx-auto">
        <h1 className="text-4xl text-center font-bold mt-6">
          Welcome to Copa Samsu Store
        </h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quod
          aspernatur deleniti tempore, <br/> nihil obcaecati? Laboriosam quod a
          praesentium inventore.
        </p>
        </div>
     
      <div className="w-[90%] mx-auto grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {guns.map((gun) => (
          <SingleGun gun={gun} countIncrease={countIncrease}></SingleGun>
        ))}
      </div>
    </div>
  );
};

export default AllGun;
