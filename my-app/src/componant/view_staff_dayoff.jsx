import React, { useState } from "react";
import axios from "axios";
import { useLocalStorage } from "../useLocalStorage";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import NavBar from "./NavBar.jsx";

function View_staff_dayoff() {
    const [data, setData] = useState([]);
    const [department, setdepartment] = useState("");
    function handleChange(event) {
        setdepartment(event.target.value);
    };

    function handleviewstaffDayoff(event) {
        event.preventDefault();
        var x = axios.get(`http://localhost:4000/view_depart_staff_dayoff/` + { department_name: event.target.value }
        ); if (x.data != "No Staff found")
            setData(x.data);
        return (
            <div>
                <NavBar />
                <h3 style={{ textAlign: "center" }}>DayOff of Staff of The Department</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">id</th>
                            <th scope="col">name</th>
                            <th scope="col">dayOff</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((y, idx) => {
                            return (
                                <tr>
                                    <th scope="row">{idx + 1}</th>
                                    <td>{y.id}</td>
                                    <td>{y.name}</td>
                                    <td>{y.dayOff}</td>
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
            <form onSubmit={handleviewstaffDayoff}>
                <div className="row">
                    <div className="col-lg">
                        <label >Please enter the name of The Department</label>
                        <input type="text" className="form-control" name="Department name" value={department} onChange={handleChange} />
                    </div>
                </div>
            </form>
        </div>

    );
}
export default View_staff_dayoff;

