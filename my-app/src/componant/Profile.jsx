import React, { useState } from "react";
import axios from 'axios';
import { useLocalStorage } from '../useLocalStorage';

import { useEffect } from 'react';


function Profile(props) {
    let persons=[];
    const [state, setState] = useState({persons});


    useEffect(() => {
        axios.get(`http://localhost:4000/profile`)
        .then(res => {
            console.log(res.data);
        })

    }, []);
    
    function handleReset(event) {
        // event.preventDefault();
    }


    return (
        // <div>
        //     <ul>
        //         {state.persons.map(person => <li>{person.name}</li>)}
        //     </ul>
        //     <button type="submit" className="btn btn-dark" onClick={handleReset}>change password</button>
        // </div>

        <h1>ashraf</h1>
    )
}

export default Profile;