import React, { useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import { useHistory } from "react-router-dom";

export default function App() {
    let history = useHistory();

    let [id, setId] = useState("");
    let [type, setType] = useState("");
    let [date, setDate] = useState("");
    let [time, setTime] = useState("");
    const [message, setMessage] = useState("");


    function handleChange(event) {
        if (event.target.name == 'id')
            setId(event.target.value);
        else if (event.target.name == 'type') {
            setType(event.target.value);
        }
        else if (event.target.name == 'time') {
            setTime(event.target.value);
        }
        else {
            setDate(event.target.value);
        }
    };

    let postadd = {
        id: id,
        type: type,
        date: date + 'T' + time + ':00+00:00'
    }

    function handleAdd(event) {
        event.preventDefault();
        // console.log("hello how are you?");
        // history.push("/login");
        console.log(postadd);
        axios.post('http://localhost:4000/hr/addsign', postadd)
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
                        <input type="text" className="form-control" name="id" placeholder="Stuff member id" value={id} onChange={handleChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg">
                        <input type="text" className="form-control" name="type" placeholder="Record type" value={type} onChange={handleChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg">
                        <input type="time" className="form-control" name="time" placeholder="Date" value={time} onChange={handleChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg">
                        <input type="date" className="form-control" name="date" placeholder="Date" value={date} onChange={handleChange} />
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