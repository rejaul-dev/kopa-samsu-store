import React from "react";

const SingleGun = (props) => {
  const { gun, countIncrease} = props;
//   console.log(gun);
  const { action, bullet, capacity, category, img, name, price, id } = gun;
  return (
    <div>
      <div className="card h-full bg-base-100 shadow-xl">
        <figure>
          <img className="w-86 h-96" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-warning">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions ">
            <div className="badge badge-outline">{action}</div>
            <div className="badge badge-outline">{bullet}</div>
          </div>
          <div className="mt-2">
            <button className="btn btn-sm btn-primary mr-2" onClick={()=> countIncrease()} >Add to Cart</button>
            <button className="btn btn-sm btn-success">Details</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SingleGun;
