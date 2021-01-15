import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import { useHistory } from "react-router-dom";

export default function () {

    const [NewEmail, setNewEmail] = useState("");
    const [oldPassword, setoldPassword] = useState("");
    const [newPassword, setnewPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [message, setMessage] = useState("");

    const history = useHistory();

    useEffect(async () => {
        axios.get(`http://localhost:4000/testAuthantication`, {}).then(res => {

        }).catch(function (error) {
            history.push("/");
        });
    });

    function handleChange(event) {
        if (event.target.name == "email")
        setNewEmail(event.target.value);
        else if (event.target.name == "oldPassword")
            setoldPassword(event.target.value);
        else if (event.target.name == "newPassword")
            setnewPassword(event.target.value);
        else
            setConfirmPass(event.target.value);
    };

    function handleUpdate(event) {
        let postUpdate = {
            email: NewEmail,
            oldPassword: oldPassword,
            newPassword: newPassword,
            confirmPass: confirmPass
        }
        axios.put(`http://localhost:4000/updateprofile`, postUpdate)
            .then(res => {
                setMessage(res.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div>
            <NavBar />
            <div className="row" >
                <div className="col-sm-8">
                    <div className="card">
                        <div className="card-body">

                            <div className="form-group">
                                <label >New Email</label>
                                <input type="email" className="form-control" name="email" value={NewEmail} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label>Old password</label>
                                <input type="password" className="form-control" name="oldPassword" value={oldPassword} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label>New password</label>
                                <input type="password" className="form-control" name="newPassword" value={newPassword} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label >Confirm Password</label>
                                <input type="password" className="form-control" name="confirmPass" value={confirmPass} onChange={handleChange} />
                            </div>
                            <button type="submit" className="btn btn-dark" onClick={handleUpdate}>Update Your INFO</button>
                            <p className="message">{message} </p>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}