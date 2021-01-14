import React, { useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import { useHistory } from "react-router-dom";

export default function App() {
    let history = useHistory();

    let [id, setID] = useState("");
    let [salary, setSalary] = useState("");
    const [message, setMessage] = useState("");


    function handleChange(event) {
        if (event.target.name == 'id')
            setID(event.target.value);
        else {
            setSalary(event.target.value);
        }
    };

    let upd = {
        id: id,
        salary: salary
    }

    function handleUpdate(event) {
        event.preventDefault();
        // console.log("hello how are you?");
        // history.push("/login");

        axios.put('http://localhost:4000/hr/updatesalary', upd)
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
                        <input type="text" className="form-control" name="id" placeholder="Member ID" value={id} onChange={handleChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg">
                        <input type="number" className="form-control" name="new_name" placeholder="New Salary" value={salary} onChange={handleChange} />
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