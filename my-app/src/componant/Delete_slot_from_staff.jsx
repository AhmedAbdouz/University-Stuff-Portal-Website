import React, { useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import NavBar from "./NavBar";


export default function App() {
    const history = useHistory();

    let [id, setid] = useState("");
    let [Slot, setSlot] = useState("");
    let [Day, setDay] = useState("");
    let [course_name, setcourse_name] = useState("");
    function handleChange(event) {
        if (event.target.name == "id")
            setid(event.target.value);
        else if (event.target.name == "course_name")
            setcourse_name(event.target.value);
        else if (event.target.name == "Slot")
            setSlot(event.target.value);
        else if (event.target.name == "Day")
            setDay(event.target.value);
    };



    let postdeleteslot = {
        acMember_id: id,
        course_name: course_name,
        slot: Slot,
        day: Day
    }

    async function handledeleteslot(event) {
        event.preventDefault();
        await axios.post(`http://localhost:4000/delete_ac_slot_from_course`, postdeleteslot)
            .then(res => {
                console.log(postdeleteslot);
                console.log("Slot Deleted successfully");
                // setMessage(res.data);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
        <div className="App">
            <NavBar />
                <div className="row">
                    <div className="col-lg">
                        <label >please enter the id of the staff member</label>
                        <input type="text" className="form-control" name="id" value={id} onChange={handleChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg">
                        <label >please enter the course name</label>
                        <input type="text" className="form-control" name="course_name" value={course_name} onChange={handleChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg">
                        <label >please enter number of slot ex:slot1,slot2,.....etc</label>
                        <input type="text" className="form-control" name="Slot" value={Slot} onChange={handleChange} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg">
                    <label >please enter the day of the slot</label>
                        <input type="text" className="form-control" name="Day" value={Day} onChange={handleChange} />
                    </div>
                </div>
                <div>
                    <button
                        type="button"
                        className="btn btn-outline-danger"
                        onClick={handledeleteslot}
                           >
                        Delete The Slot
                    </button>
                </div>
        </div>
    );

}