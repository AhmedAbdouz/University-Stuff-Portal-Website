import React, { useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import NavBar from "./NavBar";


export default function App() {
    const history=useHistory();

    let [id, setid] = useState("");
    let [new_course_name,setnew_course_name]=useState("");
    let [old_course_name,setold_course_name]=useState("");


    function handleChange(event) {
        if (event.target.name == "id")
            setid(event.target.value);
        else if (event.target.name == "new_course_name")
        setnew_course_name(event.target.value);
        else if (event.target.name == "old_course_name")
        setold_course_name(event.target.value);
        
        };

    

    let postupdateInstructor = {
        id:id,
        new_course_name:new_course_name,
        old_course_name:old_course_name,
    }

    function handleUpdateInstructor(event) {
        event.preventDefault();
        axios.put(`http://localhost:4000/update_instructor`, postupdateInstructor)
        .then(res => {
            console.log(postupdateInstructor);
            if (res.data == "Updated") {  
                console.log("Ins Updated successfully");
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
                        <input type="text" className="form-control" name="id" value={id} onChange={handleChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg">
                    <label>New Course name</label>
                        <input type="text" className="form-control" name="new_course_name"  value={new_course_name} onChange={handleChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg">
                    <label>Old Course name</label>
                        <input type="text" className="form-control" name="old_course_name"  value={old_course_name} onChange={handleChange} />
                    </div>
                </div>

                <div>
                    <button
                      type="button"
                      className="btn btn-outline-danger"
                      onClick={handleUpdateInstructor}
                    >
                      Update Instructor
                    </button>
                  </div>
        </div>
    );

}