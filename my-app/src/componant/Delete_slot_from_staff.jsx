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
        slot:Slot,
        day:Day
    }

    function handledeleteslot(event) {
        event.preventDefault();
        axios.post(`http://localhost:4000/delete_ac_slot_from_course`, postdeleteslot)
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
            <form onSubmit={handledeleteslot}>
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
                        <input type="text" className="form-control" name="Slot" value={Slot} onChange={handleChange} />
                    </div>
               </div>

               <div className="row">
                    <div className="col-lg">
                        <input type="text" className="form-control" name="Day" value={Day} onChange={handleChange} />
                    </div>
               </div>

            </form>
        </div>
    );

}