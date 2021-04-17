import React from "react";
import { useHistory } from "react-router";

const SingleTableEvent = (props) => {
  const registration = props.reg;
  const { _id, userName, eventName, email, date } = registration;
  const history = useHistory();

  const handleDelete = () => {
    fetch(`http://localhost:5055/registrationDelete/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Deleted successfully");
        history.replace("/");
      });
  };

  return (
    <tr>
      <td>{userName}</td>
      <td>{email}</td>
      <td>{date}</td>
      <td>{eventName}</td>
      <td>
        <button onClick={handleDelete} className="btn btn-danger">
          Delete{" "}
        </button>
      </td>
    </tr>
  );
};

export default SingleTableEvent;
