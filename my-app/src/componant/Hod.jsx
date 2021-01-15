import React, { useState } from "react";
import NavBar from "./NavBar";
import { useHistory } from "react-router-dom";
import { Accordion } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
export default function Hod() {
    const history = useHistory();

    return (
        <div calss="container">
            <NavBar />
            <h3 style={{ textAlign: "center", margin: 30 }}>Head Of Department</h3>

            <Accordion>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        Instructor
          </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <div class="btn-group" role="group" aria-label="Basic example">
                                <button
                                    type="button"
                                    class="btn btn-secondary"
                                    onClick={() => {
                                        history.push("/assign_instructor");
                                    }}
                                >
                                    Assign
                </button>
                                <button
                                    type="button"
                                    class="btn btn-secondary"
                                    onClick={() => {
                                        history.push("/delete_instructor");
                                    }}
                                >
                                    Remove
                </button>
                                <button
                                    type="button"
                                    class="btn btn-secondary"
                                    onClick={() => {
                                        history.push("/update_instructor");
                                    }}
                                >
                                    Update
                </button>
                            </div>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                        Requests
          </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <br />
                            <label>Recieved Requests</label>
                            <br />
                            <div class="btn-group">
                                <button
                                    type="button"
                                    class="btn btn-secondary"
                                    onClick={() => {
                                        history.push("/viewReceivedLeaveRequest");
                                    }}
                                >
                                    view Received Leave Requests
                                    </button>

                                <button
                                    type="button"
                                    class="btn btn-secondary"
                                    onClick={() => {
                                        history.push("/viewReceivedDayOffRequest");
                                    }}
                                >
                                    view Received Change Day Off Requests
                                    </button>

                            </div>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="6">
                        others
          </Accordion.Toggle>
                    <Accordion.Collapse eventKey="6">
                        <Card.Body>
                            
                            <br />
                            <button
                                type="button"
                                class="btn btn-secondary"
                                onClick={() => {
                                    history.push("/view_depart_staff");
                                }}
                            >
                                View Department Staff
              </button>
                            <br />
                            <button
                                type="button"
                                class="btn btn-secondary"
                                onClick={() => {
                                    history.push("/view_depart_staff_dayoff");
                                }}
                            >
                                View All Academic Members Day Off
              </button>
                            <br />
                            <button
                                type="button"
                                class="btn btn-secondary"
                                onClick={() => {
                                    history.push("/view_member_dayoff");
                                }}
                            >
                                View Academic Member Day Off
              </button>
                            <br />
                            <button
                                type="button"
                                class="btn btn-secondary"
                                onClick={() => {
                                    history.push("/view_course_staff");
                                }}
                            >
                                View course Staff
              </button>
                            <br />
                            <button
                                type="button"
                                class="btn btn-secondary"
                                onClick={() => {
                                    history.push("/view_depart_courses_coverage");
                                }}
                            >
                                View course coverge 
              </button>
                            <br />
                            <button
                                type="button"
                                class="btn btn-secondary"
                                onClick={() => {
                                    history.push("/view_Slots");
                                }}
                            >
                                View Slot Assignments of Course
              </button>

                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

            </Accordion>
        </div>
    );
}
