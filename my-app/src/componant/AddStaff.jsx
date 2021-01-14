import React, { useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import { useHistory } from "react-router-dom";

export default function App() {
    const history = useHistory();

    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [salary, setSalary] = useState("");
    let [gender, setGender] = useState("");
    let [staffType, setStaff] = useState("");
    let [message, setMessage] = useState("");

    function handleChange(event) {
        if (event.target.name == "email")
            setEmail(event.target.value);
        else if (event.target.name == "name")
            setName(event.target.value);
        else
            setSalary(event.target.value);
    };

    function handleRadio(e) {
        if (e.target.name == 'gender')
            setGender(e.target.value);
        else {
            setStaff(e.target.value);
        }
    }

    let postaddsuff = {
        name: name,
        email: email,
        salary: salary,
        gender: gender,
        staffType: staffType
    }

    function handleAddStaff(event) {
        event.preventDefault();
        // console.log("hello how are you?");
        // history.push("/login");

        axios.post(`http://localhost:4000/addStuff`, postaddsuff)
            .then(res => {
                setMessage(res.data);
                // if (res.data.message == "change password") {  // needs to change the password and delete his authantication 
                //     setUserID(res.data.id);
                //     setflag(true);
                //     setMessage("You need to change your Password");
                // }   
                // else if (res.data.message == "loged in") {
                //     console.log(res);
                // }
                // else {
                //     setMessage(res.data.message);
                // }
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
        <div className="App">
            <NavBar />
            <form onSubmit={handleAddStaff}>
                <div className="row">
                    <div className="col-lg">
                        <input type="text" className="form-control" name="name" placeholder="Name" value={name} onChange={handleChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg">
                        <input type="text" className="form-control" name="email" placeholder="Email" value={email} onChange={handleChange} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg">
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Salary"
                            aria-label="Amount (to the nearest dollar)"
                            value={salary}
                            onChange={handleChange}
                            name="salary"
                        />
                    </div>
                </div>
                <div>
                    <p style={{ margin: 10 }} > Please select your gender:</p>
                    <input type="radio" id="male" name="gender" value="male" onChange={handleRadio} />
                    <label >Male</label>
                    <br />
                    <input type="radio" id="female" name="gender" value="female" onChange={handleRadio} />
                    <label >Female</label>
                </div>
                <div>
                    <p style={{ margin: 10 }} > Please select your gender:</p>
                    <input type="radio" id="HR" name="type" value="1" onChange={handleRadio} />
                    <label >HR</label>
                    <br />
                    <input type="radio" id="Ac" name="type" value="2" onChange={handleRadio} />
                    <label >Academic Member</label>
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