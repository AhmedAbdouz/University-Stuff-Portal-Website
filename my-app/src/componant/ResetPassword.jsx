import React, { useState } from "react";
import axios from "axios";
import { useLocalStorage } from '../useLocalStorage';

function ResetPassword(props) {

    const [oldPassword, setoldPassword] = useState("");
    const [newPassword, setnewPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [message, setMessage] = useState("");

    function handleChange(event) {
        if (event.target.name == "oldPassword")
            setoldPassword(event.target.value);
        else if (event.target.name == "newPassword")
            setnewPassword(event.target.value);
        else
            setConfirmPass(event.target.value);
    };

    let postReset = {
        id: props.userID,
        oldPassword: oldPassword,
        newPassword: newPassword,
        confirmPass: confirmPass
    }

    function handleReset(event) {
        event.preventDefault();
        axios.post(`http://localhost:4000/resetpassword`, postReset)
            .then(res => {
                console.log(postReset);
                if (res.data == "ok") {  // view profile
                    console.log("profile");
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
        <div className="row">
            <div className="col-sm-8">
                <div className="card">
                    <div className="card-body">
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
                        <button type="submit" className="btn btn-dark" onClick={handleReset}>change password</button>
                        <p className="message">{message}</p>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default ResetPassword;