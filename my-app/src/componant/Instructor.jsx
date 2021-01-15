import React, { useState } from "react";
import NavBar from "./NavBar";
import { useHistory } from "react-router-dom";
import { Accordion } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
export default function Instructor() {
    const history = useHistory();

    return (
        <div calss="container">
            <NavBar />
            <h3 style={{ textAlign: "center", margin: 30 }}>Instructor</h3>

            <Accordion>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="6">
                        
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
                                    history.push("/view_course_staff");
                                }}
                            >
                                View course staff
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
                            <button
                                type="button"
                                class="btn btn-secondary"
                                onClick={() => {
                                    history.push("/assign_course_coordinator");
                                }}
                            >
                                Assign Course Coordinator
              </button>
              <button
                                type="button"
                                class="btn btn-secondary"
                                onClick={() => {
                                    history.push("/assign_acm_to_slots");
                                }}
                            >
                                Assign Slot to Academic Member
              </button>
              <button
                                type="button"
                                class="btn btn-secondary"
                                onClick={() => {
                                    history.push("/delete_ac_slot_from_course");
                                }}
                            >
                                Delete Slot Assignment of Academic Member
              </button>
              <button
                                type="button"
                                class="btn btn-secondary"
                                onClick={() => {
                                    history.push("/update_ac_slot_in_course");
                                }}
                            >
                                Update Slot Assignment of Academic Member
              </button>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

            </Accordion>
        </div>
    );
}
