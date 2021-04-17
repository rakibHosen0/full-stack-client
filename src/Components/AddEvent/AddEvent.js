import React, { useState } from "react";
import { useHistory } from "react-router";
import SideBar from "../SideBar/SideBar";

const AddEvent = () => {
  const [event, setEvent] = useState({});

  const history = useHistory();

  const handleOnBlur = (e) => {
    const newBook = event;
    newBook[e.target.name] = e.target.value;
    setEvent(newBook);
  };

  const handleAddBook = (e) => {
    e.preventDefault();
    fetch("https://shielded-harbor-94538.herokuapp.com/addEvent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(event),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Your event is inserted");
        history.replace("/");
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <SideBar />
        </div>
        <div className="col-md-8">
          <form onSubmit={handleAddBook}>
            <input
              onBlur={handleOnBlur}
              name="name"
              className="form-control"
              type="text"
              placeholder="Book Name"
              required
            />{" "}
            <br />
            <input
              onBlur={handleOnBlur}
              name="author"
              className="form-control"
              type="text"
              placeholder="author name"
              required
            />{" "}
            <br />
            <input
              onBlur={handleOnBlur}
              name="img"
              className="form-control"
              type="text"
              placeholder="Image URL"
              required
            />{" "}
            <br />
            <input
              onBlur={handleOnBlur}
              name="price"
              className="form-control"
              type="number"
              placeholder="Price"
              required
            />{" "}
            <br />
            <button className="form-control btn btn-primary">Save</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEvent;
