import React, { useState } from "react";
import axios from "axios";
import { useLocalStorage } from "../useLocalStorage";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import NavBar from "./NavBar.jsx";

function View_member_Dayoff() {
    const [data, setData] = useState([]);
    const [id, setid] = useState("");
    function handleChange(event) {
        setid(event.target.value);
    };

    function handlememberdayoff(event) {
        event.preventDefault();
        var x = axios.get(`http://localhost:4000/view_member_dayoff/` + { staff_id: event.target.value }
        ); if (x.data != "No Staff found")
            setData(x.data);
        return (
            <div>
                <NavBar />
                <h3 style={{ textAlign: "center" }}>Coverage of The course</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">name</th>
                            <th scope="col">DayOff</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{id}</td>
                            <td>{data}</td>
                        </tr>
                            );

                    </tbody>
                </table>
            </div>
        );
    }

    return (

        <div className="App">
            <NavBar />
            <form onSubmit={handlememberdayoff}>
                <div className="row">
                    <div className="col-lg">
                        <label >please enter the id of the staff member</label>
                        <input type="text" className="form-control" name="Staff Id" value={id} onChange={handleChange} />
                    </div>
                </div>
            </form>
        </div>

    );
}
export default View_member_Dayoff;

