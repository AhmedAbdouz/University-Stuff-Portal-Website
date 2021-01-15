import React, { Component, useEffect } from "react";
import "./month.css"
import Picker from "react-month-picker";
import "react-month-picker/css/month-picker.css";
import axios from "axios";
import Attendance from "./Attendance";
import NavBar from "./NavBar";
import { useHistory } from "react-router-dom";

axios.defaults.withCredentials = true;

class MonthBox extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            value: this.props.value || "N/A"
        };
        this._handleClick = this._handleClick.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            value: nextProps.value || "N/A"
        });
    }

    render() {
        return (
            <div className="box" onClick={this._handleClick}>
                <label>{this.state.value}</label>
            </div>
        );
    }

    _handleClick(e) {
        this.props.onClick && this.props.onClick(e);
    }
}

class List extends React.Component {


    constructor(props, context) {
        super(props, context);
        this.inputRef = React.createRef();

        this.state = {
            mvalue: { year: 2021, month: 1 },
            month: "",
            year: "",
        };

        this.handleClickMonthBox = this.handleClickMonthBox.bind(this);
        this.handleAMonthChange = this.handleAMonthChange.bind(this);
        this.handleAMonthDissmis = this.handleAMonthDissmis.bind(this);
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            value: nextProps.value || "N/A"
        });
    }

    render() {
        const pickerLang = {
            months: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec"
            ],
            from: "From",
            to: "To"
        };
        const mvalue = this.state.mvalue;
        const month = this.state.mvalue.month;
        const year = this.state.mvalue.year;

        const makeText = m => {
            if (m && m.year && m.month)
                return pickerLang.months[m.month - 1] + ". " + m.year;
            return "?";
        };

        return (
            <div>
                <ul className="list-area">
                    <li>
                        <label>
                            <b>Pick A Month</b>
                        </label>
                        <div className="edit">
                            <Picker
                                ref={this.inputRef}
                                years={[2020, 2021, 2022]}
                                value={mvalue}
                                lang={pickerLang.months}
                                onChange={this.handleAMonthChange}
                                onDismiss={this.handleAMonthDissmis}
                            >
                                <MonthBox
                                    value={makeText(mvalue)}
                                    onClick={this.handleClickMonthBox}
                                />
                            </Picker>
                        </div>
                    </li>
                </ul>
                <Attendance key={this.state.month + this.state.year} month={this.state.month} year={this.state.year} />
            </div>

        );
    }

    handleClickMonthBox(e) {
        this.inputRef.current.show();
    }
    handleAMonthChange(value, text) {
        // 
    }
    handleAMonthDissmis(value) {
        console.log("why?");
        this.setState({ mvalue: value, month: value.month, year: value.year });
        console.log(this.state.firstshow);
    }
}

class Main extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            value: this.props.value
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            value: nextProps.value
        });
    }

    render() {
        return (
            <div>
                <NavBar />
                <List />
            </div>
        );
    }
}

export default () => {
    const history = useHistory();

    useEffect(async () => {
        axios.get(`http://localhost:4000/monthPiker`, {}).then(res => {

        }).catch(function (error) {
            console.log(error + " this my error");
            history.push("/");
        });
    });
    return (
        <div>
            <Main />
        </div>
    )

};
