import React, { useEffect, useState } from "react";
import SideBar from "../SideBar/SideBar";
import SingleTableEvent from "../SingleTableEvent/SingleTableEvent";

const AllEvents = () => {
  const [allRegistrations, setAllRegistrations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5055/registrations")
      .then((res) => res.json())
      .then((data) => setAllRegistrations(data));
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <SideBar />
        </div>
        <div className="col-md-8">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Registration Date</th>
                <th>Event Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allRegistrations.map((reg) => (
                <SingleTableEvent reg={reg}></SingleTableEvent>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllEvents;
