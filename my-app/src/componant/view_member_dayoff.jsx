import React, { useState } from "react";
import axios from "axios";
import { useLocalStorage } from "../useLocalStorage";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import NavBar from "./NavBar.jsx";

function View_member_Dayoff() {
    const [data, setData] = useState();
    const [id, setid] = useState("");
    function handleChange(event) {
        setid(event.target.value);
    };

   async function handlememberdayoff(event) {
        event.preventDefault();
        var x =await axios.post(`http://localhost:4000/view_member_dayoff/` , { staff_id: event.target.value }
        ); if (x.data != "No Staff found"){
            setData(x.data);
        }
    }

    return (

        <div className="App">
            <NavBar />
                <div className="row">
                    <div className="col-lg">
                        <label >please enter the id of the staff member</label>
                        <input type="text" className="form-control" name="Staff Id" value={id} onChange={handleChange} />
                    </div>
                </div>
                <div>
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={handlememberdayoff}
          value={id}
        >
          View Member Day off
                    </button>
      </div>
      <div>
                <h3 style={{ textAlign: "center" }}>DayOff of The Academic Member</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">DayOff</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{id}</td>
                            <td>{data}</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>

    );
}
export default View_member_Dayoff;

