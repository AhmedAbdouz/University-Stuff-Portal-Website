import React, { useState } from "react";

function SlotDay(props) {
  if(!props.day||!props.day.day)
  return <h1>can't see the schadule</h1>

  return (

      <div className=" card col-lg-4 col-md-6 col-sm-12 schedule" >
        <div className="card-header">
          <h3>{props.day}</h3>
        </div>

        <div className="card-body">
          <table className="table" >
            <thead>
              <tr>
                <th scope="col">slot</th>
                <th scope="col">instructor id</th>
                <th scope="col">location</th>
                <th scope="col">type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1st</td>
                <td>
                  {props.day.slot1 && props.day.slot1.instructorID
                    ? props.day.slot1.instructorID
                    : "free"}
                </td>
                <td>
                  {props.day.slot1 && props.day.slot1.location
                    ? props.day.slot1.location
                    : "free"}
                </td>
                <td>
                  {props.day.slot1 && props.day.slot1.type
                    ? props.day.slot1.type
                    : "free"}
                </td>
              </tr>
              <tr>
                <td>2nd</td>
                <td>
                  {props.day.slot2 && props.day.slot2.instructorID
                    ? props.day.slot2.instructorID
                    : "free"}
                </td>
                <td>
                  {props.day.slot2 && props.day.slot2.location
                    ? props.day.slot2.location
                    : "free"}
                </td>
                <td>
                  {props.day.slot2 && props.day.slot2.type
                    ? props.day.slot2.type
                    : "free"}
                </td>
              </tr>
              <tr>
                <td>3rd</td>
                <td>
                  {props.day.slot3 && props.day.slot3.instructorID
                    ? props.day.slot3.instructorID
                    : "free"}
                </td>
                <td>
                  {props.day.slot3 && props.day.slot3.location
                    ? props.day.slot3.location
                    : "free"}
                </td>
                <td>
                  {props.day.slot3 && props.day.slot3.type
                    ? props.day.slot3.type
                    : "free"}
                </td>
              </tr>
              <tr>
                <td>4th</td>
                <td>
                  {props.day.slot4 && props.day.slot4.instructorID
                    ? props.day.slot4.instructorID
                    : "free"}
                </td>
                <td>
                  {props.day.slot4 && props.day.slot4.location
                    ? props.day.slot4.location
                    : "free"}
                </td>
                <td>
                  {props.day.slot4 && props.day.slot4.type
                    ? props.day.slot4.type
                    : "free"}
                </td>
              </tr>
              <tr>
                <td>5th</td>
                <td>
                  {props.day.slot5 && props.day.slot5.instructorID
                    ? props.day.slot5.instructorID
                    : "free"}
                </td>
                <td>
                  {props.day.slot5 && props.day.slot5.location
                    ? props.day.slot5.location
                    : "free"}
                </td>
                <td>
                  {props.day.slot5 && props.day.slot5.type
                    ? props.day.slot5.type
                    : "free"}
                </td>
              </tr>
            </tbody>
          </table>

      </div>
    </div>
  );
}

export default SlotDay;
