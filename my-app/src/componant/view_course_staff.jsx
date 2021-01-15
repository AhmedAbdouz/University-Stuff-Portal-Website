import React, { useState } from "react";
import axios from "axios";
import { useLocalStorage } from "../useLocalStorage";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import NavBar from "./NavBar.jsx";

function View_course_staff() {
  const [data, setData] = useState([]);
  const [course, setcourse] = useState("");
  function handleChange(event) {
    setcourse(event.target.value);
  };

  function handleviewprofile(event) {
    event.preventDefault();
    var x =  axios.get(`http://localhost:4000/get_staff_member/` + { id: event.target.value }
    ); if (x.data != "No Staff found")
      setData(x.data);
    return (
      <div>
        <NavBar />
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
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.salary}</td>
              <td>{data.office}</td>
              <td>{data.gender}</td>
              <td>{data.dayOff}</td>
            </tr>
                      );

                  </tbody>
        </table>
      </div>
    );
  }

  function handleviewstaff(event) {
    event.preventDefault();
    var x =  axios.get(`http://localhost:4000/view_depart_staff_dayoff/` + { course_name: event.target.value }
    ); if (x.data != "No Staff found")
      setData(x.data);
    return (
      <div>
        <NavBar />
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
                      onClick={ handleviewprofile }
                      value={y.id}
                    >
                      view profile
                            </button>
                  </td>



                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  return (

    <div className="App">
      <NavBar />
      <form onSubmit={handleviewstaff}>
        <div className="row">
          <div className="col-lg">
            <input type="text" className="form-control" name="Course name" value={course} onChange={handleChange} />
          </div>
        </div>
      </form>
    </div>

  );
}
export default View_course_staff;

