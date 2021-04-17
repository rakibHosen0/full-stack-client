import React, { useEffect, useState } from "react";
import SingleEvent from "../SingleEvent/SingleEvent";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5055/events")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="container">
      <div className="d-flex justify-content-center m-5">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Search Book..."
        />
        <button className="btn btn-primary">Search</button>
      </div>
      <div className="container">
        <div className="row">
          {data.map((event) => (
            <SingleEvent key={event._id} event={event}></SingleEvent>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
