import React, { useState } from "react";
import axios from 'axios';
import { useLocalStorage } from '../useLocalStorage';
import { useEffect } from 'react';
import { useHistory } from "react-router-dom";

function NavBar(props) {

  const [noti, SetNoti] = useState([""]);
  const history = useHistory();

  // const e=<h1>asdfsgh</h1>
  // const x=props.name;
  const x = [1, "Notification", "Update Profile", "logout"];
  const functionArr = [handle, handleNotifcation, handleUpdateProfile, handleLogout];
  function handle(event) {
    x.forEach((y) => {
      if (y == event.target.name) {
        history.push("/" + y);
      }
    })
  }

  function handleNotifcation() {
    axios.get(`http://localhost:4000/notification`, {})
      .then(res => {
        SetNoti(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function handleUpdateProfile() {
    history.push("/UpdateProfile");
  }

  function handleLogout() {
    axios.get(`http://localhost:4000/logout`, {})
      .then(res => {
        history.push("/");
      })
  }

  return (
    <div className="NavColor">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <a className="navbar-brand" href="">GUC</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li key={20}>
              <div className="btn-group">
                <button type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Notification
  </button>
                <div className="dropdown-menu dropdown-menu-right">
                  {
                    noti.map((n, idx) => {
                     return  <button className="dropdown-item" type="button">{n}</button>
                    })
                  }
                </div>
              </div>
            </li>
            {
              x.map((y, idx) => {
                return (<li className="" key={y}>
                  <button  aria-haspopup="true" aria-expanded="false" onClick={functionArr[idx]} name={y} >{y}</button>
                </li>)
              })
            }
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default NavBar;