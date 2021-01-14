import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import NavBar from "./NavBar";


export default function HRpg() {
    const history = useHistory();
    const HandelClick = (ev) => {
        history.push("/hr" + ev.target.name);
    }
    return (
        <div calss="container">
            <NavBar />
            <div class="row">
                <div class="col">
                    <div class="accordion" id="accordionExample">
                        <div class="card">
                            <div class="card-header" id="headingOne">
                                <h5 class="mb-0">
                                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                        Faculty
        </button>
                                </h5>
                            </div>

                            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <div class="card-body">
                                    <div class="btn-group" role="group" aria-label="Basic example">
                                        <button type="button" class="btn btn-secondary" name="/addfaculty" onClick={HandelClick}>Add</button>
                                        <button type="button" class="btn btn-secondary" name="/deletefaculty" onClick={HandelClick}>Remove</button>
                                        <button type="button" class="btn btn-secondary" name="/updatefaculty" onClick={HandelClick}>Update</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="headingTwo">
                                <h5 class="mb-0">
                                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Department
        </button>
                                </h5>
                            </div>
                            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                <div class="card-body">
                                    <div class="btn-group" role="group" aria-label="Basic example">
                                        <button type="button" class="btn btn-secondary" name="/adddepartment" onClick={HandelClick}>Add</button>
                                        <button type="button" class="btn btn-secondary" name="/deletedepartment" onClick={HandelClick}>Remove</button>
                                        <button type="button" class="btn btn-secondary" name="/updatedepartment" onClick={HandelClick}>Update</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="headingThree">
                                <h5 class="mb-0">
                                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Course
        </button>
                                </h5>
                            </div>
                            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                <div class="card-body">
                                    <div class="btn-group" role="group" aria-label="Basic example">
                                        <button type="button" class="btn btn-secondary" name="/addcourse" onClick={HandelClick}>Add</button>
                                        <button type="button" class="btn btn-secondary" name="/deletecourse" onClick={HandelClick}>Remove</button>
                                        <button type="button" class="btn btn-secondary" name="/updatecourse" onClick={HandelClick}>Update</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="headingThree">
                                <h5 class="mb-0">
                                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                                        Location
        </button>
                                </h5>
                            </div>
                            <div id="collapseFour" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                <div class="card-body">
                                    <div class="btn-group" role="group" aria-label="Basic example">
                                        <button type="button" class="btn btn-secondary" name="/addlocation" onClick={HandelClick}>Add</button>
                                        <button type="button" class="btn btn-secondary" name="/deletelocation" onClick={HandelClick}>Remove</button>
                                        <button type="button" class="btn btn-secondary" name="/updatelocation" onClick={HandelClick}>Update</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="accordion" id="accordionExampleF">
                        <div class="card">
                            <div class="card-header" id="headingOneF">
                                <h5 class="mb-0">
                                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOneF" aria-expanded="false" aria-controls="collapseOneF">
                                        Stuff Members
        </button>
                                </h5>
                            </div>

                            <div id="collapseOneF" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExampleF">
                                <div class="card-body">
                                    <div class="btn-group" role="group" aria-label="Basic example">
                                        <button type="button" class="btn btn-secondary" name="/addstuff" onClick={HandelClick}>Add</button>
                                        <button type="button" class="btn btn-secondary" name="/deletestuff" onClick={HandelClick} >Remove</button>
                                        <button type="button" class="btn btn-secondary" name="/updatestuff" onClick={HandelClick}>Update Profile</button>
                                        <button type="button" class="btn btn-secondary" name="/updatesalary" onClick={HandelClick}>Update Salary</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="headingTwoF">
                                <h5 class="mb-0">
                                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwoF" aria-expanded="false" aria-controls="collapseTwoF">
                                        Attendance
        </button>
                                </h5>
                            </div>
                            <div id="collapseTwoF" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExampleF">
                                <div class="card-body">
                                    <div class="btn-group" role="group" aria-label="Basic example">
                                        <button type="button" class="btn btn-secondary" name="/stuffmissing" onClick={HandelClick}>View Stuff with missing hours/days </button>
                                        <button type="button" class="btn btn-secondary" name="/stuffattendace" onClick={HandelClick}>View Stuff Attendance record</button>
                                        <button type="button" class="btn btn-secondary" name="/addsign" onClick={HandelClick}>Add Sign in/out for a stuff member</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}