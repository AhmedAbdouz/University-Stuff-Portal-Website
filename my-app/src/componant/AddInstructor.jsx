import React, { useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import NavBar from "./NavBar";


export default function App() {
    const history=useHistory();

    let [id, setid] = useState("");
    let [course_name,setcourse_name]=useState("");

    function handleChange(event) {
        if (event.target.name == "id")
            setid(event.target.value);
        else if (event.target.name == "course_name")
            setcourse_name(event.target.value);
        
        };

    

    let postaddInstructor = {
        id:id,
        course_name:course_name,
    }

    function handleAddInstructor(event) {
        event.preventDefault();
        axios.post(`http://localhost:4000/assign_instructor`, postaddInstructor)
        .then(res => {
            console.log(postaddInstructor);
            if (res.data == "Assigned") {  
                console.log("Ins Assigneed successfully");
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
                        <input type="text" className="form-control" name="id" value={id} onChange={handleChange} />
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