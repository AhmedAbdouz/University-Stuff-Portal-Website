import React, { useState } from "react";
import axios from "axios";
import { useLocalStorage } from "../useLocalStorage";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import NavBar from "./NavBar.jsx";

function View_department_staff() {
  let history = useHistory();
  const [data, setdata] = useState([]);
  const [data2, setdata2] = useState([]);
  const [department, setdepartment] = useState("");
  function handleChange(event) {
    setdepartment(event.target.value);
  };

  async function handleviewprofile(event) {
    event.preventDefault();
    var m= await axios.post(`http://localhost:4000/get_staff_member/` , { id: event.target.value }
    ); if (m.data != "No Staff found")
      setdata2(m.data);

  }

  async function handleviewstaff(event) {
    event.preventDefault();
    var x = await axios.post(`http://localhost:4000/view_depart_staff/`, { department_name: department }
    );
    if (x.data != "No Staff found") {
      setdata(x.data);
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
          onClick={handleviewstaff}
          value={department}
        >
          View Staff
                    </button>
      </div>
      <div>
        <h3 style={{ textAlign: "center" }}>Staff of The Department</h3>
        <table className="table">
          <thead>
            <tr>
             <th scope="col">#</th>
              <th scope="col">id</th>
              <th scope="col">name</th>
              <th scope="col">view profile</th>
            </tr>
          </thead>
          <tbody>
            {data.map((y, idx) => {
              return (
                <tr>
                  <th scope="row">{idx + 1}</th>
                  <td>{y.id}</td>
                  <td>{y.name}</td>
                  <td>
                    {" "}
                    <button
                      type="button"
                      className="btn btn-outline-success"
                      onClick={handleviewprofile}
                      value={y.id}
                    >
                      view profile
                            </button>
                  </td>



                </tr>
              );
            })
            }
          </tbody>
        </table>
      </div>
    
      <div>
        <h3 style={{ textAlign: "center" }}>The Profile of This Member</h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">name</th>
              <th scope="col">Email</th>
              <th scope="col">Salary</th>
              <th scope="col">Office</th>
              <th scope="col">Gender</th>
              <th scope="col">DayOff</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data2.id}</td>
              <td>{data2.name}</td>
              <td>{data2.email}</td>
              <td>{data2.salary}</td>
              <td>{data2.office}</td>
              <td>{data2.gender}</td>
              <td>{data2.dayOff}</td>
            </tr>
                  </tbody>
        </table>
      </div>
    </div>

  );
}
export default View_department_staff;

