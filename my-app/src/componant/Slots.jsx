import React, { useState } from "react";
import axios from "axios";
import { useLocalStorage } from "../useLocalStorage";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import SlotDay from "./SlotDay.jsx";

function Slots(props) {
  const [data, setData] = useState([1, 2, 3, 4, 5, 6]);
  useEffect(async () => {
    var x = await axios.get(`http://localhost:4000/view_TAs_Assignments`);
    setData(x.data);
  }, []);

  return (
    <div >
      <NavBar />
      <h3 style={{ textAlign: "center" ,margin:30 }}>Schadule</h3>
      <div className="row schedule">
        <SlotDay day={data[0]} />
        <SlotDay day={data[1]} />
        <SlotDay day={data[2]} />
        <SlotDay day={data[3]} />
        <SlotDay day={data[4]} />
        <SlotDay day={data[5]} />
        </div>
    </div>
  );
}

export default Slots;
