import React, { useEffect, useState } from "react";
import SingleBook from "../SingleBook/SingleBook";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://shielded-harbor-94538.herokuapp.com/events")
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
            <SingleBook key={event._id} event={event}></SingleBook>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
