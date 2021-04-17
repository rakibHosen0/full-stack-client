import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";

const Registration = () => {
  const { id } = useParams();
  const [event, setEvent] = useState({});
  const user = JSON.parse(localStorage.getItem("user"));

  const [registration, setRegistration] = useState({
    userName: user.name,
    email: user.email,
  });

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (registration.date) {
      fetch("http://localhost:5055/addRegistration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(registration),
      })
        .then((res) => res.json())
        .then((data) => {
          alert("Your registration is successful");
          history.replace("/");
        });
    }
  };

  const handleDateChange = (e) => {
    const newRegistration = registration;
    newRegistration.date = e.target.value;
    setRegistration(newRegistration);
  };

  useEffect(() => {
    fetch(`http://localhost:5055/event/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setEvent(data);
        const newRegistration = registration;
        newRegistration.eventName = data.name;
        newRegistration.eventDescription = data.description;
        newRegistration.img = data.img;
        setRegistration(newRegistration);
      });
  }, []);

  return (
    <>
      <h3 className="d-flex justify-content-center">
        Registration for this Book
      </h3>{" "}
      <br />
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input
            className="form-control w-50"
            type="text"
            placeholder="Your Full Name"
            value={user.name}
          />{" "}
          <br />
          <input
            className="form-control w-50"
            type="text"
            placeholder="Your Email"
            value={user.email}
          />{" "}
          <br />
          <input
            className="form-control w-50"
            type="text"
            placeholder="Event Name"
            value={event.name}
          />{" "}
          <br />
          <textarea
            cols="150"
            rows="5"
            className="form-control w-50"
            type="text"
            placeholder="Event Description"
            value={event.description}
          />{" "}
          <br />
          <input
            className="form-control w-50"
            type="date"
            onChange={handleDateChange}
          />{" "}
          <br />
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Registration;
