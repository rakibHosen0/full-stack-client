import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="bg-secondary h-100 d-flex flex-column justify-content-center">
      <Link to="/allEvents">
        <h3>Book List</h3>
      </Link>
      <Link to="/addEvent">
        <button className="btn btn-success">Add Book</button>
      </Link>
    </div>
  );
};

export default SideBar;
