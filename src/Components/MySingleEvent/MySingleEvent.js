import React from "react";
import { useHistory } from "react-router";

const MySingleEvent = (props) => {
  const event = props.event;
  const { _id, img, date, userName, eventName } = event;

  const history = useHistory();

  const handleDelete = () => {
    fetch(`http://localhost:5055/registrationDelete/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Your registered event is delete.");
        history.replace("/");
      });
  };

  return (
    <div className="col-md-6">
      <div className="d-flex justify-content-between p-5 shadow rounded">
        <div>
          <img src={img} className="img-fluid w-75" alt="" />
        </div>
        <div className="mt-5">
          <h3>Name: {userName}</h3>
          <h3>Event: {eventName}</h3>
          <h4>Date: {date}</h4>
          <br />
          <br />
          <button onClick={handleDelete} className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MySingleEvent;
