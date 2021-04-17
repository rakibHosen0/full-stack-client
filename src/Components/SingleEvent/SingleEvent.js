import React from "react";
import { Link } from "react-router-dom";

const SingleEvent = (props) => {
  const event = props.event;
  const { _id, name, img, author, price } = event;

  return (
    <div className="col-md-4 mb-5">
      <div className="shadow rounded p-3 m-2 h-100">
        <img className="img-fluid" src={img} alt="name" />
        <h4 className="text-decoration-none">{name}</h4>
        <h6 className="text-decoration-none">{author}</h6>
        <div className="d-flex justify-content-between">
          <h4 className="text-primary">${price}</h4>
          <Link to={`/registration/${_id}`}>
            <button className="btn btn-primary">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleEvent;
