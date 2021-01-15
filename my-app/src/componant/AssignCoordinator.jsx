import React, { useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import NavBar from "./NavBar";


function AssignCoordinator() {
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

    function handleassigncoordinator() {
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
                <div className="row">
                    <div className="col-lg">
                    <label >please enter the id of the staff member</label>
                        <input type="text" className="form-control" name="coordinator_id" value={coordinator_id} onChange={handleChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg">
                    <label >please enter the name of the course</label>

                        <input type="text" className="form-control" name="course_name"  value={course_name} onChange={handleChange} />
                    </div>
                </div>
                <div>
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={handleassigncoordinator}
        >
                Assign Coordinator 
                    </button>
      </div>
               
            
        </div>
    );

}
export default AssignCoordinator;
