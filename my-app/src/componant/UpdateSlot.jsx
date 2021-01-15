import React, { useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import { useHistory } from "react-router-dom";

export default function AddSlot() {
  const history = useHistory();

  let [slot, setSlot] = useState("");
  let [day, setDay] = useState("");
  let [type, setType] = useState("");
  let [location, setLocation] = useState("");
  let [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (slot == "" || day == "" || location == "") {
      setMessage("Missing data");
    } else {

      let postUpdateSlot = {
        slot: slot,
        day: day,
        type: type,
        location: location,
      };

      axios
        .put(`http://localhost:4000/UpdateSLot`, postUpdateSlot)
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

        <h2 className="pt-3" style={{textAlign:"center"}}> Update slot</h2>
        <div className=" pt-5">
          <select
            value={slot}
            onChange={(e) => {
              setSlot(e.target.value);
            }}
            className="custom-select"
          >
            <option value="">Choose slot</option>
            <option value="slot1">slot1 </option>
            <option value="slot2">slot2 </option>
            <option value="slot3">slot3 </option>
            <option value="slot4">slot4 </option>
            <option value="slot5">slot5 </option>
          </select>
        </div>

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

        <div className=" pt-2">
          <select
            value={type}
            onChange={(e) => {
              setType(e.target.value);
            }}
            className="custom-select"
          >
            <option value="">Choose type</option>
            <option value="lecture">lecture </option>
            <option value="tutorial   ">tutorial </option>
            <option value="lab   ">lab </option>
          </select>
        </div>

        <div className="pt-2">
          <input
            type="text"
            className="form-control"
            name="location"
            placeholder="location"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
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
