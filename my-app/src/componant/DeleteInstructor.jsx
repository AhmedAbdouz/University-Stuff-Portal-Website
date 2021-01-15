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

    

    let postdeleteInstructor = {
        id:id,
        course_name:course_name,
    }

    function handleDeleteInstructor(event) {
        event.preventDefault();
        axios.delete(`http://localhost:4000/delete_instructor`, postdeleteInstructor)
        .then(res => {
            console.log(postdeleteInstructor);
            if (res.data == "deleted") {  
                console.log("Ins deleted successfully");
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
            <form onSubmit = {handleDeleteInstructor}>
                <div className="row">
                    <div className="col-lg">
                    <label>ID of The Instructor</label>
                        <input type="text" className="form-control" name="id" placeholder="ID" value={id} onChange={handleChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg">
                    <label>The Course Name</label>
                        <input type="text" className="form-control" name="course_name" placeholder="Course_name" 
                        value={course_name} onChange={handleChange} />
                    </div>
                </div>

               
            </form>
        </div>
    );

}