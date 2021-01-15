import React, { useState } from "react";
import axios from "axios";
import { useLocalStorage } from "../useLocalStorage";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import NavBar from "./NavBar.jsx";

function View_course_coverage() {
    const [data, setData] = useState([]);
    const [course, setcourse] = useState("");
    function handleChange(event) {
        setcourse(event.target.value);
    };

   async function handlecoursecoverage(event) {
        event.preventDefault();
        var x = await axios.post(`http://localhost:4000/view_depart_courses_coverage/` , { course_name: event.target.value }
        ); if (x.data != "No Staff found"){

            setData(x.data);
            console.log(data);
        }        
    }

    return (

        <div className="App">
            <NavBar />
                <div className="row">
                    <div className="col-lg">
                        <input type="text" className="form-control" name="Course name" value={course} onChange={handleChange} />
                    </div>
                </div>
                <div>
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={handlecoursecoverage}
          value={course}
        >
          View Course Coverage
                    </button>
      </div>
      <div>
                <h3 style={{ textAlign: "center" }}>Coverage of The course</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">name</th>
                            <th scope="col">Coverage</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{course}</td>
                            <td>{data}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    );
}
export default View_course_coverage;

