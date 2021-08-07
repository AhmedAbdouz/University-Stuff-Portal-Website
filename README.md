# Stuff-Portal

## index.js in root folder to run

## server listen to 3000

## all date needed for the routes will be passed as
    -params in the link ex ( " http://localhost:3000/:memberID " ) 
    -in the body with row json format 
    ex {
        "oldPassword":"111",
        "password": "123",
        "confirmPass": "123"
    }
///////////////////////////////////////////////////////

##  login 
Functionality: login & if it's the first time he will be redirected to change his password form "123456" handel in front end
Route: /login
Request type: POST
Request body: {"email": "123","password": "123" , "staffType":"1"}  // 1 => hr  && 2 => acmember
Response: "redirect to home page or to reset password if first login " just a massage
note that he will still be authanticated because redirection didn't handeled here and it will be handeled in front end and after the redirection I always expire the cookie.


## logout
Functionality: logout
Route: /logout
Request type: GET
Parameters: null
Response: redirect to login page

## view profile
Functionality: view the profile of the authanticated user
Route: /profile
Request type: GET
Parameters: null
Response: user Record in datebase except deleted the password field

## update profile 
Functionality: update profile info of the user just (email,password).
Route: /updateProfile
Request type: POST
Request body: {"email": "123","oldPassword":"123","password": "123" , "confirmPass":"123"}  // all this date in the body are optional
Response: null 

## reset password
Functionality: changing the password on the first login
Route: /resetpassword
Request type: POST
Request body: {"password": "123","confirmPass": "123"}
Response: redirected to login page 


## *** the id card of the stuff will simulate sign in/out  in these 2 routes so that they are not authanticated. You can sign in many time or outs many times but this will not affect you hours spend in the university *** 
## Sign in.  
Functionality: verifing that a stuff entered the campus
Route: /signin
Request type: POST
Request body: {"id": "hr-1"} 
Response: null 
## Sign out.  
Functionality: verifing that a stuff leaved the campus
Route: /signout
Request type: POST
Request body: {"id": "hr-1"} 
Response: null 

## attendance
Functionality: view the dates of signin/out of the user of specific month or all records if not specified
Route: /attendance
Request type: POST
Request body: {"month": 1}   // optional
Response: Array of objects [{date:..,type:"in/out"}] ex
{
    {
        "date": "2020-12-23T03:58:18.790Z",
        "type": "in"
    },
    {
        "date": "2020-12-23T03:59:15.680Z",
        "type": "out"
    },
    {
        "date": "2020-12-23T05:13:58.221Z",
        "type": "out"
    }
} 
(Note) there could be multiple outs or ins in this response but it will not affect the hours spend in Uni.

## view missing days and hours 
Functionality: view missing days and hours (spend in the Uni in minites)
Route: /view_missingdays_and_hours
Request type: GET
Request body: null 
Response: Array of objects (dayinfo) every object indicates all the info of one day ,ex:
{
    {
        "date": "2020-12-21T13:46:50.572Z", // date of this day
        "missinghours": 499.91995,          // number of minites missed (not attendes ) in that day in the uni out of 8/24 hours
        "type": " workDay",                 // or dayOff or friday or accepted holiday
        "missingDay": false                 // attended or not 
    },
    {
        ......
    }
}

## there are 2 schedule (salaryJob,dayJob).

1-salaryJob
    Functionality: it updates the attribute monthSalary for all stuffs at 20:00 on day 10 of every month & this is the amount that should be paid for the stuff.
2-dayJob
    Functionality: it updates {
        1- attribute hours this is the hours spent in the Uni of the stuff.
        2- dayInfo array   with this object {
            "date": "2020-12-21T13:46:50.572Z", // date of this day
            "missinghours": 499.91995,      // number of minites missed (not attendes ) in that day in the uni out of 8/24 hours
            "type": " workDay",                 // or dayOff or friday or accepted holiday
            "missingDay": false                 // attended or not 
        
        }
    }
    for all stuffs at 19:00 on every day

##############################
# Stuff-Portal

## ***HR*** ***Functionalities***
>## **Location:**
>>**Functionality:** .<br>
**Route:**.<br>
**Request type:** .<br>
**Parameters:** .<br> 
**Request Body:** .<br>
**Response:** .<br>
>>**Functionality:** Adding a new location.<br>
**Route:** /hr/addlocation<br>
**Request type:** Post<br> 
**Request Body:** {"name" : "C6.202" , "capcity" : 25 , "type" : "room" }<br>
**Response:** Send the created location.<br>
>>**Functionality:** Deleting location.<br>
**Route:** /hr/deletelocation<br>
**Request type:** Delete<br> 
**Request Body:** {"name" : "C6.202" }<br>
**Response:** Send messege if deleted.<br>
>>**Functionality:** Updating a location.<br>
**Route:** /hr/updatelocation<br>
**Request type:** Put<br> 
**Request Body:** {"name" : "C6.202" , "new_name": "h12" , "capcity" : 200 , "type" : "hall"}<br>
**Response:** Send messege if updated.<br>

>## **Faculty:**
>>**Functionality:** Adding a new faculty.<br>
**Route:** /hr/addfaculty<br>
**Request type:** Post<br> 
**Request Body:** {"name" : "MECHA" }<br>
**Response:** Send the created faculty.<br>
>>**Functionality:** Deleting faculty.<br>
**Route:** /hr/deletefaculty<br>
**Request type:** Delete<br> 
**Request Body:** {"name" : "MECHA" }<br>
**Response:** Send messege if deleted.<br>
>>**Functionality:** Updating a faculty.<br>
**Route:** /hr/updatefaculty<br>
**Request type:** Put<br> 
**Request Body:** {"name" : "MECHA" , "new_name": "EMS" }<br>
**Response:** Send messege if updated.<br>

>## **Department:**
>>**Functionality:** Adding a new Department under some faculty.<br>
**Route:** /hr/addDepartment<br>
**Request type:** Post<br> 
**Request Body:** {"name" : "DP1",   "faculty" : "EMS" }<br>
**Response:** Send the faculty after the adding.<br>
>>**Functionality:** Deleting department.<br>
**Route:** /hr/deletedepartment<br>
**Request type:** Delete<br> 
**Request Body:** {"name" : "DP1" }<br>
**Response:** Send messege if deleted.<br>
>>**Functionality:** Updating a department.<br>
**Route:** /hr/updatedepartment<br>
**Request type:** Put<br> 
**Request Body:** {"name" : "DP1" , "new_name": "DP2", "new_faculty" : "EMS", "head" : "ac-12345" }<br>
**Response:** Send messege if updated.<br>

>## **Course:**
>>**Functionality:** Adding a new course under some department.<br>
**Route:** /hr/addcourse<br>
**Request type:** Post<br> 
**Request Body:** {"name" : "advanced",   "department" : "DP1"}<br>
**Response:** Send the department after the adding.<br>
>>**Functionality:** Deleting Course.<br>
**Route:** /hr/deletecourse<br>
**Request type:** Delete<br> 
**Request Body:** {"name" : "advanced" }<br>
**Response:** Send messege if deleted.<br>
>>**Functionality:** Updating a department.<br>
**Route:** /hr/updatecourse<br>
**Request type:** Put<br> 
**Request Body:** {"name" : "advanced" , "new_name": "not advanced" ,"remove_department" : "DP1" , "new_department" : "DP2" }<br>
**Response:** Send messege if updated.<br>

>## **Suff members:**
>>**Functionality:** Deleting a stuff.<br>
**Route:** /hr/deletestuff<br>
**Request type:** Delete<br> 
**Request Body:** {"id" : "ac-12" }<br>
**Response:** Send messege if deleted.<br>
>>**Functionality:** Updating a stuff.<br>
**Route:** /hr/updatestuff<br>
**Request type:** Put<br> 
**Request Body:** {"name" : "ahmed" , "id": "ac-12" ,"email" : "abced@aa.co" , "dayOff" : "Sunday" }<br>
**Response:** Send messege if updated.<br>
>>**Functionality:** Get a stuff attendance record.<br>
**Route:** /hr/stuffattendance<br>
**Request type:** Post<br> 
**Request Body:** {"id" : "ac-12" }<br>
**Response:** Send the attendace record.<br>
>>**Functionality:** add a missing sign in/out record.<br>
**Route:** /hr/addsign<br>
**Request type:** Post<br> 
**Request Body:** {"id" : "ac-12" ,"date" : "2020-12-20T21:36:06.995+00:00" , "type" : "out" }<br>
**Response:** Send the attendace record.<br>
>>**Functionality:** Get a all stuff missing hours or days.<br>
**Route:** /hr/stuffmissing<br>
**Request type:** Get<br> 
**Response:** Sends object contains all the suff with missing hours or days.<br>
>>**Functionality:** update the salary of stuff member.<br>
**Route:** /hr/updatesalary<br>
**Request type:** Put<br> 
**Request Body:** {"id" : "ac-12" ,"salary" : 15000}<br>
**Response:** Sends message if updated.<br>

***********************************************************
# Stuff-Portal
## attendance
Functionality: view the dates of signin/out of the user of specific month or all records if not specified
Route: /attendance
Request type: POST
Request body: {"month": 1}   // optional
Response: Array of objects [{date:..,type:"in/out"}] ex
{
    {
        "date": "2020-12-23T03:58:18.790Z",
        "type": "in"
    },
    {
        "date": "2020-12-23T03:59:15.680Z",
        "type": "out"
    },
    {
        "date": "2020-12-23T05:13:58.221Z",
        "type": "out"
    }
} 
(Note) there could be multiple outs or ins in this response but it will not affect the hours spend in Uni.
## Assign Instructor
Functionality: assign instructor to a specific course
Route: /assign_instructor
Request type: post
Request body: {"id":"ac-1"},{"course_name":"csen701}
Response: "Assigned"
## Delete Instructor
Functionality:Delete Instructor Assignment in specific course  
Route: /delete_instructor
Request Type: delete
Request body: {"id":"ac-1"},{"course_name":"csen701} //Id of the instructor
Response: "Deleted"
## Update Instructor
Functionality: Update Assignment of Instructor(change the course he is assigned to from old course to new course )
Route:/update_instructor
Request Type:put
Request body:{"new_course_name":"csen702","old_course_name":"csen701","id":"ac-3"}
Response:"Updated"
## View Department Staff
Functionality:View the staff of Department for HOD or Instructor
Route:/view_depart_staff
Request Type:post
Request body:"department_name":"csen"
Response:The Data of all staff in the department // I will handle which specific info will be shown in front end
## View Department Staff Dayoff
Functionality:vie dayoff of all Staff members in HOD Department
Route:/view_depart_staff_dayoff
Request Type:post
Request body:"department_name":"csen"
Response: The name of every staff member next to his day off    ex: Ahmed    Thursday
## View Member DayOff
Functionality:view the day off of specific staff member in HOD Department
Route:/view_member_dayoff
Request Type:post
Request body:"department_name":"csen","staff_id":"ac-2"
Response:The day off of the staff member we have his id  ex:  Ahmed    Thursday
## View course Staff
Functionality:View the staff of Course for HOD or Instructor
Route:/view_course_staff
Request Type:post
Request body:"course_name":"csen701"
Response:The Data of all staff in the course // I will handle which specific info will be shown in front end
## View Department course Coverage 
Functionality:view the coverage of specific course in a department for HOD
Route:/view_depart_courses_coverage
Request Type:post
Request body:"department_name":"csen","course_name":"csen701"
Response: the coverage of the course 
## View Course Coverage 
Functionality:view the coverage of specific course in a department for Instructor
Route:/view_Instructor_course_coverage
Request Type:post
Request body:"course_name":"csen701"
Response:The coverage of the course
## View Tas Assignments
Functionality:view all Academic Members Assignments of a course (The Schedule of a course)
Route:/view_TAs_Assignments
Request Type:post
Request body:"course_name":"csen701"
Response:all Academic Members Assignments of a course (The Schedule of a course)
## View Received Requests 
Functionality:view all Received requests for HOD
Route:/view_requests
Request Type:post
Request body:"Hod_Id":"ac-3"
Response:all Received Requests for the HOD.
## Assign Course Coordinator
Functionality:choose academic member to assign as a course coordinator
Route:/assign_course_coordinator
Request Type:post
Request body:"course_name":"csen701","coordinator_id":"ac-6"
Response:"Assigned"
## Assign Academic Member to slot
Functionality:Assign a slot for an academic member
Route:/assign_acm_to_slots
Request Type:post
Request body:"course_name":"csen701","acMember_id":"ac-6","slot":"slot1","day":"Monday"
Response:"Assigned"
## Delete Assignment of Academic Member to slot
Functionality:Delete assignment of a specific slot for an academic member
Route:/delete_ac_slot_from_course
Request Type:delete
Request body:"course_name":"csen701","acMember_id":"ac-6","slot":"slot1","day":"Monday"
Response:"Done"
## Update Assignment of Academic Member to slot
Functionality:Update assignment of a specific slot for an academic member(remove him from old slot and assign a new slot)
Route:/update_ac_slot_in_course
Request Type:put
Request body:"course_name":"csen701","acMember_id":"ac-6","oldslot":"slot1","oldday":"Monday","newslot":"slot2","newday":"Saturday"
Response:"Done"
## Accept Leave Request
Functionality: Accept a leave request from receivedLeavefRequest for The HOD
Route:/accept_leave_request
Request Type:post
Request body:"request_id":"4"
Response:"successfully updated sender and reciver"
## Reject Leave Request
Functionality:Reject a leave request from receivedLeavefRequest for The HOD and optionally leave a reason
Route:/reject_leave_request
Request Type:post
Request body:"request_id":"4","Reason":"can't accept this request as ............." //Reason is optionally
Response:"successfully updated sender and reciver"
## Accept change Day off Request 
Functionality:Accept a change Day off request from receivedDayoffRequest for The HOD
Route:/accept_change_day_off_request
Request Type:post
Request body:"request_id":"4"
Response:"successfully updated sender and reciver"
## Reject change Day off Request
Functionality:Reject a change Day off request from receivedDayoffRequest for The HOD and optionally leave a reason
Route:/reject_change_day_off_request
Request Type:post
Request body:"request_id":"4","Reason":"can't accept this request as ............."  //Reason is optionally
Response:"successfully updated sender and reciver"

////////////////*******************************
1-
Functionality: get the slot linking requests to his course
Route: /viewSlots
Request type: GET
Response: Array of all slotLinking requests to his course [ {"request": "sa", "slot": "slot1", "day": "Monday","from": "123","course": "csen701","status": "Accepted","id": "5"}]

2-
Functionality: Accept a  sent slot Linking request and update status to him and the sender
Route: /slotsAcceptance
Request type: post
Request body: {"id":"11"} // the id of the request
Response: respond with  "Error" message or "ACCEPTED"

3-
Functionality: reject a  sent slot Linking request and update status to him and the sender to "Rejected"
Route: /slotsRejection
Request type: post
Request body: {"id":"11"} // the id of the request
Response: respond with  "Error" message or "Rejected"

4-
Functionality: the coordinator add slot to his course and increase the hours teached in his course by 1.5 in (total) param
Route: /addSlot
Request type: post
Request body:  {
    "slot":"slot1",
    "day":"Monday",
    "location":"c6-21",
    "type":"Tutorial"
}
Response: respond with  "Error" message or "Done"

5-
Functionality: the coordinator delete slot from his course and decrease the hours teached in his course by 1.5 in (total) param
Route: /deleteSlot
Request type: delete
Request body:  {
    "slot":"slot1",
    "day":"Monday"
}
Response: respond with  "Error" message or "Done"

6-
Functionality: the coordinator update slot from his course by changing its location and type
Route: /updateSlot
Request type: put
Request body:  {
    "slot":"slot1",
    "day":"Monday",
    "location":"b6-21",
    "type":"Lecture"
}
Response: respond with  "Error" message or "Upadted"

7-
Functionality: acMember send a replacment request to another acMember to take a slot and the request well be added
              for sender array and receiver array for the request
Route: /sendReplacmentRequest
Request type: post
Request body:  {
    "request":"asd lhasl",
    "slot":"slot1",
    "day":"Monday",
    "location":"b6-21",
    "year":"2022",
    "month":"5",
    "day":"20",
    "type":"Lecture",
    "course":"csen122",
    "location":"c5 213",
}
    -and all of this will be in object plus a unique id and status:"Pending" and the request sent by whom
Response: respond with  "Error" message or "SENT"

8-
Functionality: show the schedule of the loged in user
Route: /viewSchadule
Request type: get

Response: respond with  the schedule of the user array of days and slots 
[
{
"slot1": "sad",
"slot2": "free",
"slot3": "free",
"slot4": "free",
"slot5": "free",
"day": "Saturday"
},{ ..}..]

9-
Functionality: the acmember reject a replacmentrequest sent to him
Route: /replacmentRejection
Request type: post
Request body:  {"id":"123"} //the id of the request
Response:  respond with  "Error" message or "DONE"

9-
Functionality: the acmember accept a replacmentrequest sent to he will take this slot
Route: /replacmentAcceptance
Request type: post
Request body:  {"id":"123"} //the id of the request
Response:  respond with  "Error" message or "DONE" 

10- there is a function called updateSchaduel() add the accepted replacment requests to the user every Week


11-
Functionality: acMember send a slotlinking request to the coordinator of this course  and the request will be added
              for sender array and receiver array for the request
Route: /sendSlotLinkingRequest
Request type: post
Request body:  {
    "request":"asd lhasl",
    "slot":"slot1",
    "day":"Monday",
    "course":"csen122",
}
    -and all of this will be in object plus a unique id and status:"Pending" and the request sent from and to what 
Response: respond with  "Error" message or "SENT"

12-
Functionality: acMember send a change day off request to the head of his dapartment  and the request will be added
              for sender array and receiver array for the request
Route: /sendChangeDayOffRequest
Request type: post
Request body:  {
    "reason":"asd lhasl", 
    "day":"Monday",
}
    -and all of this will be in object plus a unique id and status:"Pending" and the request sent from and to what 
Response: respond with  "Error" message or ""dayoff change request SENT""

13-
Functionality: acMember send a leave request to the head of his dapartment  and the request will be added
              for sender array and receiver array for the request
Route: /sendLeaveRequest
Request type: post
Request body:  {
    "reason":"asd lhasl", sometime option
    "year":"2022",
    "month":"5",
    "day":"3",
}
    -and all of this will be in object plus a unique id and status:"Pending" and the request sent from and to what 
Response: respond with  "Error" message or "Leave request SENT"

14-
Functionality: view my received slotLinking request
Route: /viewReceivedSlotLinkingRequest
Request type: get

Response: array of the slot Linking request (objects)
[
{
"request": "sasad",
"slot": "slot1",
"day": "Monday",
"course": "csen.1",
"status": "Pending",
"to": "ac-23"
},{ ..}..]



14-
Functionality: view my sent slotLinking request
Route: /viewSentSlotLinkingRequests
Request type: get

Response: array of the slot Linking request (objects)
[
{
"request": "sasad",
"slot": "slot1",
"day": "Monday",
"course": "csen.1",
"status": "Pending",
"to": "ac-23"
},{ ..}..]

15-
Functionality: view my received replacment requests
Route: /viewReceivedReplacment
Request type: get

Response: array of the replacment requests request (objects) 
[
{
"request":"asd lhasl",
"slot":"slot1",
"day":"Monday",
"location":"b6-21",
"date":"2022-5-20",
"type":"Lecture",
"course":"csen122",
"location":"c5 213",
"status":"Pending",
"from":"ac-213"
},{ ..}..]

16-
Functionality: view my sent replacment requests
Route: /viewSentReplacment
Request type: get

Response: array of the replacment requests request (objects) 
[
{
"request":"asd lhasl",
"slot":"slot1",
"day":"Monday",
"location":"b6-21",
"date":"2022-5-20",
"type":"Lecture",
"course":"csen122",
"location":"c5 213",
"status":"Pending",
"to":"ac-213"
},{ ..}..]

17-
Functionality: view my received dayOff Request
Route: /viewReceivedDayOffRequest
Request type: get

Response: array of the dayOff request (objects) 
[
{
"reason":"asd lhasl", 
"day":"Monday",
"from":"ac-31",
"status":"Pending"
},{ ..}..]

18-
Functionality: view my sent dayOff Request
Route: /viewSentDayOffRequest
Request type: get

Response: array of the dayOff request (objects) 
[
{
"reason":"asd lhasl", 
"day":"Monday",
"to":"ac-31",
"status":"Pending"
},{ ..}..]


19-
Functionality: view my recived leave Request
Route: /viewReceivedLeaveRequest
Request type: get

Response: array of the leave request (objects) 
[
{
"reason":"asd lhasl",
"date":"2022-5-3",
"status":"Pending",
"from":"ac-123",
},{ ..}..]

20-
Functionality: view my sent leave Request
Route: /viewSentLeaveRequest
Request type: get

Response: array of the leave request (objects) 
[
{
"reason":"asd lhasl",
"date":"2022-5-3",
"status":"Pending",
"to":"ac-33",
},{ ..}..]

21-
Functionality: view my received slotLinking according to status Request
Route: /viewReceivedSlotLinkingRequest/:status
Request type: get
Parameters: status ( status of the slotlinking requests want to show) 
Example of how to call the route: /viewReceivedSlotLinkingRequest/"Accepted"

Response: array of the accepted slotLenking request (objects) 
[
{
"request": "sasad",
"slot": "slot1",
"day": "Monday",
"course": "csen.1",
"status": "Accepted",
"from": "ac-23"
},{ ..}..]

22-
Functionality: view my sent slotLinking according to status Request
Route: /viewSentSlotLinkingRequests/:status
Request type: get
Parameters: status ( status of the slotlinking requests want to show) 
Example of how to call the route: /viewSentSlotLinkingRequests/"Accepted"

Response: array of the accepted slotLenking request (objects) 
[
{
"request": "sasad",
"slot": "slot1",
"day": "Monday",
"course": "csen.1",
"status": "Accepted",
"to": "ac-23"
},{ ..}..]



23-
Functionality: view my received replacment according to status requests
Route: /viewReceivedReplacment/:status
Request type: get
Parameters: status ( status of the replacment requests want to show) 
Example of how to call the route: /viewReceivedReplacment/"Accepted"

Response: array of the replacment requests request (objects) 
[
{
"request":"asd lhasl",
"slot":"slot1",
"day":"Monday",
"location":"b6-21",
"date":"2022-5-20",
"type":"Lecture",
"course":"csen122",
"location":"c5 213",
"status":"Accepted",
"from":"ac-213"
},{ ..}..]

24-
Functionality: view my sent replacment according to status requests
Route: /viewSentReplacment/:status
Request type: get
Parameters: status ( status of the replacment requests want to show) 
Example of how to call the route: /viewSentReplacment/"Accepted"

Response: array of the replacment requests request (objects) 
[
{
"request":"asd lhasl",
"slot":"slot1",
"day":"Monday",
"location":"b6-21",
"date":"2022-5-20",
"type":"Lecture",
"course":"csen122",
"location":"c5 213",
"status":"Accepted",
"to":"ac-213"
},{ ..}..]

25-
Functionality: view my received dayOff Request  according to status requests
Route: /viewReceivedDayOffRequest/:status
Request type: get
Parameters: status ( status of the dayoff requests want to show) 
Example of how to call the route: /viewReceivedDayOffRequest/"Accepted"

Response: array of the dayOff request (objects) 
[
{
"reason":"asd lhasl", 
"day":"Monday",
"from":"ac-31",
"status":"Accepted"
},{ ..}..]

26-
Functionality: view my received dayOff Request  according to status requests
Route: /viewSentDayOffRequest/:status
Request type: get
Parameters: status ( status of the dayoff requests want to show) 
Example of how to call the route: /viewSentDayOffRequest/"Accepted"

Response: array of the dayOff request (objects) 
[
{
"reason":"asd lhasl", 
"day":"Monday",
"to":"ac-31",
"status":"Accepted"
},{ ..}..]


27-
Functionality: view my received leave Request  according to status requests
Route: /viewReceivedLeaveRequest/:status
Request type: get
Parameters: status ( status of the leave requests want to show) 
Example of how to call the route: /viewReceivedLeaveRequest/"Accepted"

Response: array of the leave request (objects) 
[
{
"reason":"asd lhasl",
"date":"2022-5-3",
"status":"Pending",
"from":"ac-33",
},{ ..}..]

28-
Functionality: view my received leave Request  according to status requests
Route: /viewSentLeaveRequest/:status
Request type: get
Parameters: status ( status of the leave requests want to show) 
Example of how to call the route: /viewSentLeaveRequest/"Accepted"

Response: array of the leave request (objects) 
[
{
"reason":"asd lhasl",
"date":"2022-5-3",
"status":"Pending",
"from":"ac-33",
},{ ..}..]


29-
Functionality: get covarge of a course (covarge/total)
Route: /getCovarge
Request type: post
Request body:{"course":"csenl12"}
Response: number the covarge  "24.5"

30-
Functionality: cancel a slotlinking req
Route: /cancelSlotLinkingRequest
Request type: post
Request body:{"id":"1232"}
Response: "ERROR" or "DONE" message

31-
Functionality: cancel a Replacment req
Route: /cancelReplacmentRequest
Request type: post
Request body:{"id":"1232"}
Response: "ERROR" or "DONE" message


32-
Functionality: cancel a DAY OFF req
Route: /cancelDayoffRequest
Request type: post
Request body:{"id":"1232"}
Response: "ERROR" or "DONE" message

33-
Functionality: cancel a Leave req
Route: /cancelLeaveRequest
Request type: post
Request body:{"id":"1232"}
Response: "ERROR" or "DONE" message

