import React, { useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import { useHistory } from "react-router-dom";

export default function App() {
    let history = useHistory();

    let [name, setName] = useState("");
    let [type, setType] = useState("");
    let [capcity, setCapcity] = useState("");
    const [message, setMessage] = useState("");


    function handleChange(event) {
        if (event.target.name == 'name')
            setName(event.target.value);
        else if (event.target.name == 'capcity')
            setCapcity(event.target.value);
        else setType(event.target.value);
    };

    let postadd = {
        name: name,
        capcity: capcity,
        type: type
    }

    function handleAdd(event) {
        event.preventDefault();
        // console.log("hello how are you?");
        // history.push("/login");
        console.log(postadd);
        axios.post('http://localhost:4000/hr/addlocation', postadd)
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
                        <input type="text" className="form-control" name="name" placeholder="Location Name" value={name} onChange={handleChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg">
                        <input type="number" className="form-control" name="capcity" placeholder="Capcity" value={capcity} onChange={handleChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg">
                        <input type="text" className="form-control" name="type" placeholder="Type" value={type} onChange={handleChange} />
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