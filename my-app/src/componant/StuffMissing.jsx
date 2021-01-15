import React, { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.withCredentials = true;

class Attendance extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: true,
        }
    }

    componentDidMount() {
        console.log("this lih ds l");
        axios.get(`http://localhost:4000/hr/stuffmissing`).then(res => {
            this.setState({ data: res.data });
            this.setState({ isLoading: false });
        });
    }



    render() {
        const { isLoading, data } = this.state;
        if (isLoading) {
            return <div >Loading...</div>;
        }
        return (

            <div>

                <div class="container">
                    <h2>All stuff with missing days/hours</h2>
                </div>


                <table className='table table-bordered table-hover'>
                    <thead>

                        <tr>
                            <th scope="col">#</th>
                            <th>ID</th>
                            <th>MissingHours</th>
                            <th>MissingDays</th>
                        </tr>
                    </thead>


                    <tbody>
                        {data.map((y, idx) => {
                            return (
                                <tr key={idx}>
                                    <th scope="row">{idx + 1}</th>
                                    <td>{y.id}</td>
                                    <td>{y.hours} </td>
                                    <td>{y.missingdays}</td>
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