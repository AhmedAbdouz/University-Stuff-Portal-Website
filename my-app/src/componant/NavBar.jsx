import React, { useState } from "react";
import axios from 'axios';
import { useLocalStorage } from '../useLocalStorage';
import { useEffect } from 'react';
import {useHistory} from "react-router-dom";

function NavBar(props) {

    const history=useHistory();

    // const e=<h1>asdfsgh</h1>
    // const x=props.name;
    const x=[1,2,4,3];
    function handle(event) {
      x.forEach((y)=>{
        if(y==event.target.name){
          history.push("/"+y);
        }
      })
    }
    return (
      <div className= "NavColor">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <a className="navbar-brand" href="">GUC</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
          {
            x.map((y)=>{
              return (<li className="" key = {y}>
                <a  className="nav-link" onClick={handle} name={y}>{y}</a>
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