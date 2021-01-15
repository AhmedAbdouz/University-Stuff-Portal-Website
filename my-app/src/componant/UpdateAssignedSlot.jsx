import React, { useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import NavBar from "./NavBar";


export default function App() {
    const history = useHistory();

    let [id, setid] = useState("");
    let [OldSlot, setOldSlot] = useState("");
    let [OldDay, setOldDay] = useState("");
    let [course_name, setcourse_name] = useState("");
    let [NewSlot, setNewSlot] = useState("");
    let [NewDay, setNewDay] = useState("");
    function handleChange(event) {
        if (event.target.name == "id")
            setid(event.target.value);
        else if (event.target.name == "course_name")
            setcourse_name(event.target.value);
        else if (event.target.name == "OldSlot")
            setOldSlot(event.target.value);
        else if (event.target.name == "OldDay")
            setOldDay(event.target.value);
        else if (event.target.name == "NewSlot")
            setNewSlot(event.target.value);
        else if (event.target.name == "NewDay")
            setNewDay(event.target.value);
    };



    let postupdateslot = {
        acMember_id: id,
        course_name: course_name,
        oldslot: OldSlot,
        oldday: OldDay,
        newslot: NewSlot,
        newday: NewDay
    }

    function handleupdateslot(event) {
        event.preventDefault();
        axios.post(`http://localhost:4000/update_ac_slot_in_course`, postupdateslot)
            .then(res => {
                console.log(postupdateslot);
                console.log("Slot Updated successfully");
              //  setMessage(res.data);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
        <div className="App">
            <NavBar />
            <form onSubmit={handleupdateslot}>
                <div className="row">
                    <div className="col-lg">
                        <input type="text" className="form-control" name="id" value={id} onChange={handleChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg">
                        <input type="text" className="form-control" name="course_name" value={course_name} onChange={handleChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg">
                        <input type="text" className="form-control" name="OldSlot" value={OldSlot} onChange={handleChange} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg">
                        <input type="text" className="form-control" name="OldDay" value={OldDay} onChange={handleChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg">
                        <input type="text" className="form-control" name="NewSlot" value={NewSlot} onChange={handleChange} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg">
                        <input type="text" className="form-control" name="NewDay" value={NewDay} onChange={handleChange} />
                    </div>
                </div>

            </form>
        </div>
    );

}