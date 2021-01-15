import React, { useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { useLocalStorage } from '../useLocalStorage';
import ResetPassword from "./ResetPassword";
axios.defaults.withCredentials = true;

function Login() {

    const history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [radio, setRadio] = useState(null);
    const [flag, setflag] = useState(false);
    const [userID, setUserID] = useState(false);

    const [id, setId] = useLocalStorage("id", "");

    function handleChange(event) {
        if (event.target.name == "email")
            setEmail(event.target.value);
        else
            setPassword(event.target.value);
    };

    function checkRadio(event) {
        setRadio(event.target.value);
    }

    const postlogin = {
        email: email,
        password: password,
        staffType: radio
    };



    function handleLogin(event) {
        event.preventDefault();
        axios.post(`http://localhost:4000/login`, postlogin)
            .then(res => {
                console.log(res.data);
                if (res.data.message == "change password") {  // needs to change the password and delete his authantication 
                    setUserID(res.data.id);
                    setflag(true);
                    setMessage("You need to change your Password");
                }
                else if (res.data.message == "loged in") {
                    console.log(res.data);
                    if (res.data.coordinator)
                        history.push("/coordinator");
                    else if (res.data.head)
                        history.push("/Hod");
                    else if (res.data.instructor)
                        history.push("/instructor");
                    else if (res.data.ta)
                        history.push("/AcMember");
                    else 
                        history.push("/hr");
                }
                else {
                    setMessage(res.data);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }





    return (
        <div className="container mt-5" >
            <h1>Login</h1>

            <div className="row" >
                <div className="col-sm-8">
                    <div className="card">
                        <div className="card-body">

                            <div className="form-group">
                                <label >Email</label>
                                <input type="email" className="form-control" name="email" value={email} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" name="password" value={password} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label >login as</label>
                                <br />
                                <input className="logintype" type="radio" name="type" value="1" onChange={checkRadio} />
                                <label>HR</label>
                                <br />
                                <input className="logintype" type="radio" name="type" value="2" onChange={checkRadio} />
                                <label>AC Member</label>
                            </div>
                            <button type="submit" className="btn btn-dark" onClick={handleLogin}>Login</button>

                            <p className="message">{message}</p>

                        </div>
                    </div>

                </div>
            </div>

            {flag ? <ResetPassword userID={userID} /> : null}

        </div>
    );


};

export default Login;