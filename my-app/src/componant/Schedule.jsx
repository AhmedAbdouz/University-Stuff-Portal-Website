import React, { useState } from "react";
import axios from "axios";
import { useLocalStorage } from "../useLocalStorage";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import Day from "./Day.jsx";

function Schedule(props) {
  const [data, setData] = useState([1, 2, 3, 4, 5, 6]);
  useEffect(async () => {
    var x = await axios.get(`http://localhost:4000/viewSchadule`);
    setData(x.data);
  }, []);

  return (
    <div >
      <NavBar />
      <h3 style={{ textAlign: "center" ,margin:30 }}>Schadule</h3>
      <div className="row schedule">
        <Day day={data[0]} />
        <Day day={data[1]} />
        <Day day={data[2]} />
        <Day day={data[3]} />
        <Day day={data[4]} />
        <Day day={data[5]} />
        </div>
    </div>
  );
}

export default Schedule;
