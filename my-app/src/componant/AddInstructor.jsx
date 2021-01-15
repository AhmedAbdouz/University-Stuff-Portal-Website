import React, { useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import NavBar from "./NavBar";


export default function App() {
    const history=useHistory();

    let [Id, setId] = useState("");
    let [Course_name,setCourse_name]=useState("");

    function handleChange(event) {
        if (event.target.name == "id")
            setId(event.target.value);
        else if (event.target.name == "course_name")
            setCourse_name(event.target.value);
        
        };

    

    let postaddInstructor = {
        id:Id,
        course_name:Course_name,
    }

    function handleAddInstructor(event) {
        event.preventDefault();
        axios.post(`http://localhost:4000/assign_instructor`, postaddInstructor)
        .then(res => {
            console.log(res.data);
            if (res.data == "Assigned") {  
                console.log("Ins Assigneed successfully");
            }
            else{
                console.log("You are not allowed to do so")
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
            
                <div className="row">
                    <div className="col-lg">
                    <label>please enter id of The Instructor</label>
                        <input type="text" className="form-control" name="id" value={Id} onChange={handleChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg">
                    <label>please enter the name of the course</label>
                        <input type="text" className="form-control" name="course_name"  value={Course_name} onChange={handleChange} />
                    </div>
                </div>
                <div>
                    <button
                      type="button"
                      className="btn btn-outline-danger"
                      onClick={handleAddInstructor}
                    >
                      Assign Instructor
                    </button>
                  </div>

               
            
        </div>
    );

}