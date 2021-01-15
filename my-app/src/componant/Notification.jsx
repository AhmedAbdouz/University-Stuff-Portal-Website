import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import axios from "axios";
axios.defaults.withCredentials = true;


export default function Notification() {
    const[noti,setNoti] = useState([]);

    useEffect(async () => {
        var x = await axios.get(`http://localhost:4000/viewSchadule`);
        setNoti(x.data);
      }, []);
    return (

        <div calss="container">
            <NavBar />
            <h3 style={{ textAlign: "center", margin: 30 }}>Notifications</h3>
            
            
        </div>
    );
}
