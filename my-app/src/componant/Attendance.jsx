import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";


axios.defaults.withCredentials = true;

class Attendance extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: true,
            hours: "",
            missingdays: ""
        }
    }

    componentDidMount() {
        this.setState({ test: this.props.year })
        const monthPicker = {
            month: this.props.month,
            year: this.props.year
        }
        axios.post(`http://localhost:4000/view_missingdays_and_hours`, monthPicker).then(res => {
            this.setState({ data: res.data.arr, hours: res.data.hours, missingdays: res.data.missingdays });
            this.setState({ isLoading: false });
        });
    }



    render() {
        const { isLoading, data, hours, missingdays } = this.state;
        if (isLoading) {
            return <div >Loading...</div>;
        }
        return (

            <div>

                <div class="container">
                    <div class="row">
                        <div class="col">
                            <label>Total current spent Hours : {hours}</label>
                        </div>
                        <div class="col">
                            <label>Total missingdays : {missingdays}</label>
                        </div>

                    </div>
                </div>


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
                        {data.map((y, idx) => {
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