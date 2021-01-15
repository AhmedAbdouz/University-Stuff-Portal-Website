import React, { useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import { useHistory } from "react-router-dom";

axios.defaults.withCredentials = true;
export default function App() {
    let history = useHistory();

    let [name, setName] = useState("");
    const [message, setMessage] = useState("");


    function handleChange(event) {
        setName(event.target.value);
    };

    let Del = {
        name: name,
    }

    function handleDelete(event) {
        event.preventDefault();
        // console.log("hello how are you?");
        // history.push("/login");
        axios.post('http://localhost:4000/hr/deletecourse', Del)
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
            <form onSubmit={handleDelete}>
                <div className="row">
                    <div className="col-lg">
                        <input type="text" className="form-control" name="name" placeholder="Course Name" value={name} onChange={handleChange} />
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