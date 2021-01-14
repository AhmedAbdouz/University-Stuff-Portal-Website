import React, { useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import { useHistory } from "react-router-dom";

export default function App() {
    let history = useHistory();

    let [name, setName] = useState("");
    let [id, setId] = useState("");
    let [email, setEmail] = useState("");
    let [dayoff, setDayoff] = useState("");
    let [office, setOffice] = useState("");
    let [anual, setAnual] = useState("");
    let [password, setPassword] = useState("");
    const [message, setMessage] = useState("");


    function handleChange(event) {
        if (event.target.name === 'name')
            setName(event.target.value);
        else if (event.target.name === 'id') {
            setId(event.target.value);

        }
        else if (event.target.name === 'email') {
            setEmail(event.target.value);
        }
        else if (event.target.name === 'dayoff') {
            setDayoff(event.target.value);
        }
        else if (event.target.name === 'office') {
            setOffice(event.target.value);
        }
        else if (event.target.name === 'anual') {
            setAnual(event.target.value);
        }
        else {
            setPassword(event.target.value);
        }
    };

    let upd = {
        id: id,
        name: name,
        email: email,
        password: password,
        dayOff: dayoff,
        annual_leave_balance: anual,
        office: office
    }

    function handleUpdate(event) {
        event.preventDefault();
        // console.log("hello how are you?");
        // history.push("/login");

        axios.put('http://localhost:4000/hr/updatestuff', upd)
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
                        <input type="text" className="form-control" name="id" placeholder="Stuff member ID" value={id} onChange={handleChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg">
                        <input type="text" className="form-control" name="name" placeholder="Member new name" value={name} onChange={handleChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg">
                        <input type="text" className="form-control" name="email" placeholder="Member new email" value={email} onChange={handleChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg">
                        <input type="password" className="form-control" name="password" placeholder="Member new password" value={password} onChange={handleChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg">
                        <input type="text" className="form-control" name="office" placeholder="New Office" value={office} onChange={handleChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg">
                        <input type="text" className="form-control" name="dayoff" placeholder="New Day off" value={dayoff} onChange={handleChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg">
                        <input type="number" className="form-control" name="anual" placeholder="New Anual leave balance" value={anual} onChange={handleChange} />
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