import React, { useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import { useHistory } from "react-router-dom";

export default function App() {
    let history = useHistory();

    let [name, setName] = useState("");
    let [new_name, setNew_name] = useState("");
    let [new_department, setNew_department] = useState("");
    let [remove_department, setRemove_department] = useState("");
    const [message, setMessage] = useState("");


    function handleChange(event) {
        if (event.target.name === 'name')
            setName(event.target.value);
        else if (event.target.name === 'new_name') {
            setNew_name(event.target.value);

        }
        else if (event.target.name === 'new_department') {
            setNew_department(event.target.value);
        }
        else {
            setRemove_department(event.target.value);
        }
    };

    let upd = {
        name: name,
        new_name: new_name,
        new_department: new_department,
        remove_department: remove_department
    }

    function handleUpdate(event) {
        event.preventDefault();
        // console.log("hello how are you?");
        // history.push("/login");

        axios.put('http://localhost:4000/hr/updatecourse', upd)
            .then(res => {
                console.log(res.data);
                if (res.data == "Not HR") {  // needs to change the password and delete his authantication 
                    history.push('/login');
                }
                else {
                    setMessage(res.data);
                }
            })
            .catch(function (error) {
                console.log(error);
                history.push('/login');
            });

    }

    return (
        <div className="App">
            <NavBar />
            <form onSubmit={handleUpdate}>
                <div className="row">
                    <div className="col-lg">
                        <input type="text" className="form-control" name="name" placeholder="Course Name" value={name} onChange={handleChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg">
                        <input type="text" className="form-control" name="new_name" placeholder="Course new name" value={new_name} onChange={handleChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg">
                        <input type="text" className="form-control" name="new_department" placeholder="New department name" value={new_department} onChange={handleChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg">
                        <input type="text" className="form-control" name="remove_department" placeholder="Remove department name" value={remove_department} onChange={handleChange} />
                    </div>
                </div>
                <br />
                <input
                    className="btn btn-primary"
                    type="submit"
                    value="Submit"
                />
                <p className="message">{message}</p>

            </form>
        </div>
    );

}