import React, { useEffect, useState } from "react";
import MySingleEvent from "../MySingleEvent/MySingleEvent";

const MyEvents = () => {
  const { email } = JSON.parse(localStorage.getItem("user"));

  const [myEvents, setMyEvents] = useState([]);

  useEffect(() => {
    fetch("https://shielded-harbor-94538.herokuapp.com/registrationByEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((data) => setMyEvents(data));
  }, [email]);

  return (
    <div className="container">
      <div className="row">
        {myEvents.map((event) => (
          <MySingleEvent key={event._id} event={event}></MySingleEvent>
        ))}
      </div>
    </div>
  );
};

export default MyEvents;
