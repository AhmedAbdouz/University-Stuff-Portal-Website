import React, { useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import NavBar from "./NavBar";


export default function App() {
    const history=useHistory();

    let [idd, setidd] = useState("");
    let [course_nam,setcourse_nam]=useState("");

    function handleChange(event) {
        if (event.target.name == "id")
            setidd(event.target.value);
        else if (event.target.name == "course_name")
            setcourse_nam(event.target.value);
        
        };

    

    let deletedeleteInstructor = {
        id:idd,
        course_name:course_nam,
    }

    function handleDeleteInstructor(event) {
        event.preventDefault();
        console.log(deletedeleteInstructor);

        axios.post(`http://localhost:4000/delete_instructor`, deletedeleteInstructor)
        .then(res => {
            console.log(res.data);
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
           
                <div className="row">
                    <div className="col-lg">
                    <label>ID of The Instructor</label>
                        <input type="text" className="form-control" name="id" placeholder="ID" value={idd} onChange={handleChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg">
                    <label>The Course Name</label>
                        <input type="text" className="form-control" name="course_name" placeholder="Course_name" 
                        value={course_nam} onChange={handleChange} />
                    </div>
                </div>
                <div>
                    <button
                      type="button"
                      className="btn btn-outline-danger"
                      onClick={handleDeleteInstructor}
                      value={idd}
                    >
                      Delete Instructor
                    </button>
                  </div>


               
            
        </div>
    );

}