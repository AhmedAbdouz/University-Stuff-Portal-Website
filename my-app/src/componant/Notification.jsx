import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import axios from "axios";
import { useHistory } from "react-router-dom";
axios.defaults.withCredentials = true;


export default function Notification() {
    const[noti,setNoti] = useState([]);
    const history=useHistory();

    useEffect(async () => {
        var x = await axios.get(`http://localhost:4000/notification`);
        setNoti(x.data);
      }, []);

    return (

        <div calss="container">
            <NavBar />
            <h3 style={{ textAlign: "center", margin: 30 }}>Notifications</h3>
            {    noti.map(y=>{
              return <button className="notitem" type="button" onClick= {()=>{history.push(y.route)}} style={{display:"block"}}>{y.id} -- {y.status} </button>
            })
          }
        </div>
    );
}
