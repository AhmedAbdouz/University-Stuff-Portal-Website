import React, { useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import { useHistory } from "react-router-dom";

export default function App() {
    let history = useHistory();

    let [name, setName] = useState("");
    let [new_name, setNew_name] = useState("");
    let [capcity, setCapcity] = useState("");
    let [type, setType] = useState("");
    const [message, setMessage] = useState("");


    function handleChange(event) {
        if (event.target.name === 'name')
            setName(event.target.value);
        else if (event.target.name === 'new_name') {
            setNew_name(event.target.value);

        }
        else if (event.target.name === 'new_capcity') {
            setCapcity(event.target.value);
        }
        else {
            setType(event.target.value);
        }
    };

    let upd = {
        name: name,
        new_name: new_name,
        capcity: capcity,
        type: type
    }

    function handleUpdate(event) {
        event.preventDefault();
        // console.log("hello how are you?");
        // history.push("/login");

        axios.put('http://localhost:4000/hr/updatelocation', upd)
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
                        <input type="text" className="form-control" name="name" placeholder="Location Name" value={name} onChange={handleChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg">
                        <input type="text" className="form-control" name="new_name" placeholder="Location new name" value={new_name} onChange={handleChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg">
                        <input type="number" className="form-control" name="new_capcity" placeholder="New Capcity" value={capcity} onChange={handleChange} />
                    </div>
                </div>
                <div>
                    <p style={{ margin: 10 }} > Please select location type:</p>
                    <input type="radio" id="office" name="type" value="office" onChange={handleChange} />
                    <label >office</label>
                    <br />
                    <input type="radio" id="room" name="type" value="room" onChange={handleChange} />
                    <label >room</label>
                    <br />
                    <input type="radio" id="hall" name="type" value="hall" onChange={handleChange} />
                    <label >hall</label>
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