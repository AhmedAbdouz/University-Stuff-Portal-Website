import React, { useState } from "react";
import NavBar from "./NavBar";
import { useHistory } from "react-router-dom";
import { Accordion } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default function AcMember() {
  const history = useHistory();

  return (
    <div calss="container">
      <NavBar />
      <h3 style={{ textAlign: "center" ,margin:30 }}>Accademic member</h3>

      <Accordion>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            SlotLinking Request
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <button
                type="button"
                class="btn btn-secondary"
                onClick={() => {
                  history.push("/SendSlotLinking");
                }}
              >
                Send
              </button>
              <br />
              <label>Sent Requests</label>
              <br />
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-secondary"
                  onClick={() => {
                    history.push("/ViewSentSlotLinking");
                  }}
                >
                  view all
                </button>
                <button
                  type="button"
                  class="btn btn-secondary"
                  onClick={() => {
                    history.push("/ViewSentSlotLinkingPending");
                  }}
                >
                  view Pending
                </button>
                <button
                  type="button"
                  class="btn btn-secondary"
                  onClick={() => {
                    history.push("/ViewSentSlotLinkingAccepted");
                  }}
                >
                  view Accepted
                </button>
                <button
                  type="button"
                  class="btn btn-secondary"
                  onClick={() => {
                    history.push("/ViewSentSlotLinkingRejected");
                  }}
                >
                  view Rejected
                </button>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="3">
            Replacment Request
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              <button
                type="button"
                class="btn btn-secondary"
                onClick={() => {
                  history.push("/SendReplacment");
                }}
              >
                Send
              </button>
              <br />
              <label>Received Requests</label>
              <br />
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-secondary"
                  onClick={() => {
                    history.push("/ViewReceivedReplacment");
                  }}
                >
                  view all
                </button>
                <button
                  type="button"
                  class="btn btn-secondary"
                  onClick={() => {
                    history.push("/ViewReceivedReplacmentPending");
                  }}
                >
                  view Pending
                </button>
                <button
                  type="button"
                  class="btn btn-secondary"
                  onClick={() => {
                    history.push("/ViewReceivedReplacmentAccepted");
                  }}
                >
                  view Accepted
                </button>
                <button
                  type="button"
                  class="btn btn-secondary"
                  onClick={() => {
                    history.push("/ViewReceivedReplacmentRejected");
                  }}
                >
                  view Rejected
                </button>
              </div>
              <br />
              <label>Sent Requests</label>
              <br />
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-secondary"
                  onClick={() => {
                    history.push("/ViewSentReplacment");
                  }}
                >
                  view all
                </button>
                <button
                  type="button"
                  class="btn btn-secondary"
                  onClick={() => {
                    history.push("/ViewSentReplacmentPending");
                  }}
                >
                  view Pending
                </button>
                <button
                  type="button"
                  class="btn btn-secondary"
                  onClick={() => {
                    history.push("/ViewSentReplacmentAccepted");
                  }}
                >
                  view Accepted
                </button>
                <button
                  type="button"
                  class="btn btn-secondary"
                  onClick={() => {
                    history.push("/ViewSentReplacmentRejected");
                  }}
                >
                  view Rejected
                </button>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="4">
            Leave Request
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="4">
            <Card.Body>
              <button
                type="button"
                class="btn btn-secondary"
                onClick={() => {
                  history.push("/SendLeave");
                }}
              >
                Send
              </button>
              <br />
              <label>Sent Requests</label>
              <br />
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-secondary"
                  onClick={() => {
                    history.push("/ViewSentLeaveRequest");
                  }}
                >
                  view all
                </button>
                <button
                  type="button"
                  class="btn btn-secondary"
                  onClick={() => {
                    history.push("/ViewSentLeaveRequestPending");
                  }}
                >
                  view Pending
                </button>
                <button
                  type="button"
                  class="btn btn-secondary"
                  onClick={() => {
                    history.push("/ViewSentLeaveRequestAccepted");
                  }}
                >
                  view Accepted
                </button>
                <button
                  type="button"
                  class="btn btn-secondary"
                  onClick={() => {
                    history.push("/ViewSentLeaveRequestRejected");
                  }}
                >
                  view Rejected
                </button>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="5">
            Change dayOff Request
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="5">
            <Card.Body>
              <button
                type="button"
                class="btn btn-secondary"
                onClick={() => {
                  history.push("/SendChangeDayOff");
                }}
              >
                Send
              </button>
              <br />
              <label>Sent Requests</label>
              <br />
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-secondary"
                  onClick={() => {
                    history.push("/ViewSentDayOffRequest");
                  }}
                >
                  view all
                </button>
                <button
                  type="button"
                  class="btn btn-secondary"
                  onClick={() => {
                    history.push("/ViewSentDayOffRequestPending");
                  }}
                >
                  view Pending
                </button>
                <button
                  type="button"
                  class="btn btn-secondary"
                  onClick={() => {
                    history.push("/ViewSentDayOffRequestAccepted");
                  }}
                >
                  view Accepted
                </button>
                <button
                  type="button"
                  class="btn btn-secondary"
                  onClick={() => {
                    history.push("/ViewSentDayOffRequestRejected");
                  }}
                >
                  view Rejected
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
              <button
                type="button"
                class="btn btn-secondary"
                onClick={() => {
                  history.push("/Schedule");
                }}
              >
                View Schadule
              </button>

            </Card.Body>
          </Accordion.Collapse>
        </Card>

      </Accordion>
    </div>
  );
}
