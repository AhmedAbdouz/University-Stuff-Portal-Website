import React from "react";
import Login from "./componant/Login.jsx";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from "./componant/Profile.jsx";
import AddStaff from "./componant/AddStaff.jsx";
import Attendance from "./componant/Attendance";
import monthPicker from "./componant/month-picker";
import UpdateProfile from "./componant/UpdateProfile";
import Notification from "./componant/Notification";

// HEMA 
import HRpg from "./componant/HRpg.jsx";
import AddFaculty from "./componant/AddFaculty.jsx";
import AddDepartment from "./componant/AddDepartment.jsx";
import AddCourse from "./componant/AddCourse.jsx";
import AddLocation from "./componant/AddLocation.jsx";
import DeleteFaculty from "./componant/DeleteFaculty.jsx";
import DeleteDepartment from "./componant/DeleteDepartment.jsx";
import DeleteCourse from "./componant/DeleteCourse.jsx";
import DeleteLocation from "./componant/DeleteLocation.jsx";
import UpdateFaculty from "./componant/UpdateFaculty.jsx";
import UpdateDepartment from "./componant/UpdateDepartment.jsx";
import UpdateCourse from "./componant/UpdateCourse.jsx";
import UpdateLocation from "./componant/UpdateLocation.jsx";
import UpdateStuff from "./componant/UpdateStuff.jsx";
import DeleteStuff from "./componant/DeleteStuff.jsx";
import UpdateSalary from "./componant/UpdateSalary.jsx";
import StuffAttendance from "./componant/StuffAttendance.jsx";
import AddSign from "./componant/AddSign.jsx";
import StuffMissing from "./componant/StuffMissing.jsx";

//Ashraf

import Coordinator from "./componant/Coordinator.jsx"
import AcMember from "./componant/AcMember.jsx"

import ViewReceivedSlotLinking from "./componant/ViewReceivedSlotLinking.jsx"
import ViewSentSlotLinking from "./componant/ViewSentSlotLinking.jsx"

import ViewReceivedDayOffRequest from "./componant/ViewReceivedDayOffRequest.jsx"
import ViewSentDayOffRequest from "./componant/ViewSentDayOffRequest.jsx"

import ViewReceivedLeaveRequest from "./componant/ViewReceivedLeaveRequest.jsx"
import ViewSentLeaveRequest from "./componant/ViewSentLeaveRequest.jsx"

import ViewReceivedReplacment from "./componant/ViewReceivedReplacment.jsx"
import ViewSentReplacment from "./componant/ViewSentReplacment.jsx"

import Slots from "./componant/Slots.jsx"

import Schedule from "./componant/Schedule.jsx"

import AddSlot from "./componant/AddSlot.jsx"
import UpdateSlot from "./componant/UpdateSlot.jsx"
import DeleteSlot from "./componant/DeleteSlot.jsx"
import SendSlotLinking from "./componant/SendSlotLinking.jsx"
import SendReplacment from "./componant/SendReplacment.jsx"
import SendLeave from "./componant/SendLeave.jsx"
import SendChangeDayOff from "./componant/SendChangeDay.jsx"

// MAHMOUD 
import Hod from "./componant/Hod.jsx"
import Instructor from "./componant/Instructor.jsx"
import AddInstructor from "./componant/AddInstructor.jsx"
import DeleteInstructor from "./componant/DeleteInstructor.jsx"
import UpdateInstructor from "./componant/UpdateInstructor.jsx"
import AssignCoordinator from "./componant/AssignCoordinator.jsx"
import view_course_staff from "./componant/view_course_staff.jsx"
import view_courses_coverage from "./componant/view_courses_coverage.jsx"
import view_department_staff from "./componant/view_department_staff.jsx"
import view_staff_dayoff from "./componant/view_staff_dayoff.jsx"
import ViewReceivedChangeDayOffRequest from "./componant/ViewReceivedChangeDayOffRequest.jsx"
import viewReceivedLeaveRequest from "./componant/ViewReceivedLeaveRequest.jsx"
import view_member_dayoff from "./componant/view_member_dayoff.jsx"
import Assign_slot_to_staff from "./componant/Assign_slot_to_staff.jsx"
import UpdateAssignedSlot from "./componant/UpdateAssignedSlot.jsx"
import Delete_slot_from_staff from "./componant/Delete_slot_from_staff.jsx"

function App() {
  return (


    <BrowserRouter>
      <Switch>

        <Route exact path="/" component={Login} />
        <Route path="/profile" component={AcMember} />
        <Route path="/UpdateProfile" component={UpdateProfile} />
        <Route path="/notification" component={Notification} />

        {/* HEMA */}

        
        <Route exact path="/hr/addfaculty" component={AddFaculty} />
        <Route exact path="/hr/adddepartment" component={AddDepartment} />
        <Route exact path="/hr/addcourse" component={AddCourse} />
        <Route exact path="/hr/addlocation" component={AddLocation} />
        <Route exact path="/hr/deletefaculty" component={DeleteFaculty} />
        <Route exact path="/hr/deletedepartment" component={DeleteDepartment} />
        <Route exact path="/hr/deletecourse" component={DeleteCourse} />
        <Route exact path="/hr/deletelocation" component={DeleteLocation} />
        <Route exact path="/hr/updatefaculty" component={UpdateFaculty} />
        <Route exact path="/hr/updatedepartment" component={UpdateDepartment} />
        <Route exact path="/hr/updatecourse" component={UpdateCourse} />
        <Route exact path="/hr/updatelocation" component={UpdateLocation} />
        <Route exact path="/hr/updatestuff" component={UpdateStuff} />
        <Route exact path="/hr/deletestuff" component={DeleteStuff} />
        <Route exact path="/hr/addstuff" component={AddStaff} />
        <Route exact path="/hr/updatesalary" component={UpdateSalary} />
        <Route exact path="/hr/stuffattendace" component={StuffAttendance} />
        <Route exact path="/hr/addsign" component={AddSign} />
        <Route exact path="/hr/stuffmissing" component={StuffMissing} />
        <Route path="/hr" component={HRpg} />

        {/*  Mahmoud  */}
        <Route exact path="/Hod" component={Hod}/>
        <Route exact path="/Instructor" component={Instructor}/>
        <Route exact path="/assign_instructor" component={AddInstructor } />
        <Route exact path="/delete_instructor" component={DeleteInstructor } />
        <Route exact path="/update_instructor" component={UpdateInstructor } />
        <Route exact path="/view_depart_staff" component={view_department_staff } />
        <Route exact path="/view_depart_staff_dayoff" component={view_staff_dayoff } />
        <Route exact path="/viewReceivedLeaveRequest" component={viewReceivedLeaveRequest } />
        <Route exact path="/viewReceivedDayOffRequest" component={ViewReceivedChangeDayOffRequest } />
        <Route exact path="/view_member_dayoff" component={view_member_dayoff } /> 
        <Route exact path="/view_course_staff" component={view_course_staff } />
        <Route exact path="/view_depart_courses_coverage" component={view_courses_coverage } />
        <Route exact path="/view_Slots" component={Slots } />
        <Route exact path="/assign_course_coordinator" component={AssignCoordinator } />
        <Route exact path="/assign_acm_to_slots" component={Assign_slot_to_staff } />
        <Route exact path="/delete_ac_slot_from_course" component={Delete_slot_from_staff } />
        <Route exact path="/update_ac_slot_in_course" component={UpdateAssignedSlot } />

        {/*  Ashraf  */}
        <Route exact  path="/AcMember" component={AcMember} />
        <Route exact  path="/Coordinator" component={Coordinator} />

        <Route exact  path="/SendChangeDayOff" component={SendChangeDayOff} />
        <Route exact  path="/SendLeave" component={SendLeave} />
        <Route exact  path="/SendSlotLinking" component={SendSlotLinking}/>
        <Route exact  path="/SendReplacment" component={SendReplacment}/>

        <Route exact  path="/UpdateSlot" component={UpdateSlot}/>
        <Route exact  path="/DeleteSlot" component={DeleteSlot}/>
        <Route exact  path="/AddSlot" component={AddSlot}/>


        <Route exact path="/AddStaff" component={AddStaff } />
        <Route exact path="/Slots" component={Slots} />
        <Route exact  path="/Schedule" component={Schedule} />

        <Route exact  path="/ViewReceivedSlotLinking" component={()=><ViewReceivedSlotLinking status=""/>} />
        <Route exact  path="/ViewRecievedSlotLinkingPending" component={()=><ViewReceivedSlotLinking status="Pending"/>} />
        <Route exact  path="/ViewRecievedSlotLinkingAccepted" component={()=><ViewReceivedSlotLinking status="Accepted"/>} />
        <Route exact  path="/ViewRecievedSlotLinkingRejected" component={()=><ViewReceivedSlotLinking status="Rejected"/>} />

        <Route exact  path="/ViewSentSlotLinking" component={()=><ViewSentSlotLinking status=""/>} />
        <Route exact  path="/ViewSentSlotLinkingPending" component={()=><ViewSentSlotLinking status="Pending"/>} />
        <Route exact  path="/ViewSentSlotLinkingAccepted" component={()=><ViewSentSlotLinking status="Accepted"/>} />
        <Route exact  path="/ViewSentSlotLinkingRejected" component={()=><ViewSentSlotLinking status="Rejected"/>} />

        <Route exact  path="/ViewReceivedDayOffRequest" component={()=><ViewReceivedDayOffRequest status=""/>} />
        <Route exact  path="/ViewReceivedDayOffRequestPending" component={()=><ViewReceivedDayOffRequest status="Pending"/>} />
        <Route exact  path="/ViewReceivedDayOffRequestAccepted" component={()=><ViewReceivedDayOffRequest status="Accepted"/>} />
        <Route exact  path="/ViewReceivedDayOffRequestRejected" component={()=><ViewReceivedDayOffRequest status="Rejected"/>} />

        <Route exact  path="/ViewSentDayOffRequest" component={()=><ViewSentDayOffRequest status=""/>} />
        <Route exact  path="/ViewSentDayOffRequestPending" component={()=><ViewSentDayOffRequest status="Pending"/>} />
        <Route exact  path="/ViewSentDayOffRequestAccepted" component={()=><ViewSentDayOffRequest status="Accepted"/>} />
        <Route exact  path="/ViewSentDayOffRequestRejected" component={()=><ViewSentDayOffRequest status="Rejected"/>} />

        <Route exact  path="/ViewReceivedLeaveRequest" component={()=><ViewReceivedLeaveRequest status=""/>} />
        <Route exact  path="/ViewReceivedLeaveRequestPending" component={()=><ViewReceivedLeaveRequest status="Pending"/>} />
        <Route exact  path="/ViewReceivedLeaveRequestAccepted" component={()=><ViewReceivedLeaveRequest status="Accepted"/>} />
        <Route exact  path="/ViewReceivedLeaveRequestRejected" component={()=><ViewReceivedLeaveRequest status="Rejected"/>} />

        <Route exact  path="/ViewSentLeaveRequest" component={()=><ViewSentLeaveRequest status=""/>} />
        <Route exact  path="/ViewSentLeaveRequestPending" component={()=><ViewSentLeaveRequest status="Pending"/>} />
        <Route exact  path="/ViewSentLeaveRequestAccepted" component={()=><ViewSentLeaveRequest status="Accepted"/>} />
        <Route exact  path="/ViewSentLeaveRequestRejected" component={()=><ViewSentLeaveRequest status="Rejected"/>} />

        <Route exact  path="/ViewReceivedReplacment" component={()=><ViewReceivedReplacment status=""/>} />
        <Route exact  path="/ViewReceivedReplacmentPending" component={()=><ViewReceivedReplacment status="Pending"/>} />
        <Route exact  path="/ViewReceivedReplacmentAccepted" component={()=><ViewReceivedReplacment status="Accepted"/>} />
        <Route exact  path="/ViewReceivedReplacmentRejected" component={()=><ViewReceivedReplacment status="Rejected"/>} />

        <Route exact  path="/ViewSentReplacment" component={()=><ViewSentReplacment status=""/>} />
        <Route exact  path="/ViewSentReplacmentPending" component={()=><ViewSentReplacment status="Pending"/>} />
        <Route exact  path="/ViewSentReplacmentAccepted" component={()=><ViewSentReplacment status="Accepted"/>} />
        <Route exact  path="/ViewSentReplacmentRejected" component={()=><ViewSentReplacment status="Rejected"/>} />


      </Switch>
    </BrowserRouter>

  );
}



export default App;
