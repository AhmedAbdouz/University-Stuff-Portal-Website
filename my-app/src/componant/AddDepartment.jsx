import React, { useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import { useHistory } from "react-router-dom";

export default function App() {
    let history = useHistory();

    let [name, setName] = useState("");
    let [faculty, setFaculty] = useState("");
    const [message, setMessage] = useState("");


    function handleChange(event) {
        if (event.target.name == 'name')
            setName(event.target.value);
        else setFaculty(event.target.value);
    };

    let postadd = {
        name: name,
        faculty: faculty
    }

    function handleAdd(event) {
        event.preventDefault();
        // console.log("hello how are you?");
        // history.push("/login");
        console.log(postadd);
        axios.post('http://localhost:4000/hr/addDepartment', postadd)
            .then(res => {
                console.log(res.data);
                if (res.data == "Not HR") {  
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
            <form onSubmit={handleAdd}>
                <div className="row">
                    <div className="col-lg">
                        <input type="text" className="form-control" name="name" placeholder="Department Name" value={name} onChange={handleChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg">
                        <input type="text" className="form-control" name="faculty" placeholder="Faculty Name" value={faculty} onChange={handleChange} />
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