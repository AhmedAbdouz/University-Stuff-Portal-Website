import React, { useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import NavBar from "./NavBar";


export default function App() {
    const history=useHistory();

    let [coordinator_id, setcoordinator_id] = useState("");
    let [course_name,setcourse_name]=useState("");

    function handleChange(event) {
        if (event.target.name == "coordinator_id")
        setcoordinator_id(event.target.value);
        else if (event.target.name == "course_name")
            setcourse_name(event.target.value);
        
        };

    

    let postAssignCoordinator = {
        coordinator_id:coordinator_id,
        course_name:course_name,
    }

    function handleAddInstructor(event) {
        event.preventDefault();
        axios.post(`http://localhost:4000/assign_course_coordinator`, postAssignCoordinator)
        .then(res => {
            console.log(postAssignCoordinator);
            if (res.data == "Assigned") {  
                console.log("Coordinator Assigneed successfully");
            }
            // else {
            //     setMessage(res.data);
            // }
        })
        .catch(function (error) {
            console.log(error);
        });
 
    }

    return (
        <div className="App">
            <NavBar />
            <form onSubmit = {handleAddInstructor}>
                <div className="row">
                    <div className="col-lg">
                        <input type="text" className="form-control" name="coordinator_id" value={coordinator_id} onChange={handleChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg">
                        <input type="text" className="form-control" name="course_name"  value={course_name} onChange={handleChange} />
                    </div>
                </div>

               
            </form>
        </div>
    );

}