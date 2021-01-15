import React, { useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import { useHistory } from "react-router-dom";

export default function SendchangeDayOff() {
  const history = useHistory();

  let [day, setDay] = useState("");
  let [message, setMessage] = useState("");
  let [reason, setReason] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (day == "" ) {
      setMessage("Missing data");
    } else {

      let post = {
        day:day,
        reason:reason
      };

      axios
        .post(`http://localhost:4000/sendChangeDayOffRequest`, post)
        .then((res) => {
          setMessage(res.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  return (
    <div className="App">
      <NavBar />

        <h2 className="pt-3" style={{textAlign:"center"}}>Send change dayoff request</h2>

        <div className=" pt-2">
          <select
            value={day}
            onChange={(e) => {
              setDay(e.target.value);
            }}
            className="custom-select"
          >
            <option value="">Choose day</option>
            <option value="Saturday">Saturday </option>
            <option value="Sunday   ">Sunday </option>
            <option value="Monday">Monday </option>
            <option value="Tuesday">Tuesday </option>
            <option value="Wednesday">Wednesday </option>
            <option value="Thursday">Thursday </option>
          </select>
        </div>

        <div className="pt-2">
          <input
            type="text"
            className="form-control"
            name="reason"
            placeholder="reason"
            value={reason}
            onChange={(e) => {
              setReason(e.target.value);
            }}
          />
        </div>

        <br />
        <input
          className="btn btn-primary"
          type="submit"
          onClick={handleSubmit}
        />
        <br/>
        <label className="pt-3">{message}</label>
    </div>
  );
}
