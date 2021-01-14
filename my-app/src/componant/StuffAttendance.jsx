import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

axios.defaults.withCredentials = true;
//  const history = useHistory();

class Attendance extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            data: ["", []],
            id: "",
            message: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleGet = this.handleGet.bind(this);

    }

    handleChange(event) {
        this.setState({ id: event.target.value });
    }

    handleGet(event) {
        event.preventDefault();
        axios.post(`http://localhost:4000/hr/stuffattendance`, { id: this.state.id }).then(res => {
            //history..   
            if (res.data == "Worng User ID" || res.data === "You are missing required data") {
                this.setState({ message: res.data });
            }
            else {
                this.setState({ data: res.data });
                this.setState({ isLoading: false });
            }
        })
        // .catch(() => {
        //     history.push('/login');
        // });
    }

    render() {
        const { data, id, message } = this.state;
        return (

            <div>
                <form onSubmit={this.handleGet}>
                    <input type="text" className="form-control" name="id" placeholder="Enter the Stuff-ID" value={id} onChange={this.handleChange} />
                    <input
                        className="btn btn-primary"
                        type="submit"
                        value="Submit"

                    />
                    <p className="message">{message}</p>
                </form>
                <h2>{data[0]}</h2>


                <table className='table table-bordered table-hover'>
                    <thead>

                        <tr>
                            <th scope="col">#</th>
                            <th>Date</th>
                            <th>Missinghours</th>
                            <th>Type</th>
                            <th>MissingDay </th>
                        </tr>
                    </thead>


                    <tbody>
                        {data[1].map((y, idx) => {
                            return (
                                <tr key={idx}>
                                    <th scope="row">{idx + 1}</th>
                                    <td>{y.date}</td>
                                    <td>{y.missinghours} </td>
                                    <td>{y.type}</td>
                                    <td>{y.missingDay}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Attendance;