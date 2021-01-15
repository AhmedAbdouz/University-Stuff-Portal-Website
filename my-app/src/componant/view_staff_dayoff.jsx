import React, { useState } from "react";
import axios from "axios";
import { useLocalStorage } from "../useLocalStorage";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import NavBar from "./NavBar.jsx";

function View_staff_dayoff() {
  let history = useHistory();
  const [data, setdata] = useState([]);
  const [department, setdepartment] = useState("");
  function handleChange(event) {
    setdepartment(event.target.value);
    console.log(department);
  };
  async function handleviewstaffDayoff(event) {
    event.preventDefault();
    var x = await axios.post(`http://localhost:4000/view_depart_staff_dayoff/`, { department_name: department }
    );
    if (x.data != "No Staff found") {
      setdata(x.data);
      console.log(data);
    }

  }

  return (

    <div className="App">
      <NavBar />

      <div className="row">
        <div className="col-lg">
          <label >please enter the name of the department</label>
          <input type="text" className="form-control" name="Department name" value={department} onChange={handleChange} />
        </div>
      </div>
      <div>
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={handleviewstaffDayoff}
          value={department}
        >
          View Staff
                    </button>
      </div>
      <div>
        <h3 style={{ textAlign: "center" }}>DayOff of Staff of The Department</h3>
        <table className="table">
          <thead>
            <tr>
             <th scope="col">#</th>
              <th scope="col">DayOff</th>
            </tr>
          </thead>
          <tbody>
            {data.map((y, idx) => {
              return (
                <tr>
                  <th scope="row">{idx + 1}</th>
                  <td>{y}</td>
                              
                </tr>
              );
            })
            }
          </tbody>
        </table>
      </div>
    </div>

  );
}
export default View_staff_dayoff;
