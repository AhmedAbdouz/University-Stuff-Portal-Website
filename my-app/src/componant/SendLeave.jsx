import React, { useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import { useHistory } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function SendLeave() {
  const history = useHistory();

  let [type, setType] = useState("");
  let [startDate, setStartDate] = useState("");
  let [message, setMessage] = useState("");
  let [reason, setReason] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (type == "" || startDate == "") {
      setMessage("Missing data");
    } else {

      let post = {
        type:type,
        date:startDate,
        reason:reason
      };

      axios
        .post(`http://localhost:4000/sendLeaveRequest`, post)
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

        <h2 className="pt-3" style={{textAlign:"center"}}>Send leave request</h2>
        <div className=" pt-5">
          <select
            value={type}
            onChange={(e) => {
              setType(e.target.value);
            }}
            className="custom-select"
          >
            <option value="">Choose type</option>
            <option value="Annual">Annual </option>
            <option value="Accidental">Accidental </option>
            <option value="Sick">Sick </option>
            <option value="Maternity">Maternity </option>
            <option value="Compensation">Compensation </option>
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

        <label className="pt-3">date</label>{" "}
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />

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
