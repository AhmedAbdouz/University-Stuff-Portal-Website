const mongoose = require("mongoose");

const schema = mongoose.Schema( {
  id: {
    type: String,
    required: true,
    unique : true
  },
  gender:{
    type:String
  },
  email: {
    type: String,
    required: true,
     unique : true
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,//default value
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  monthSalary:{
    type:Number
  },
  dayOff: {
    type: String,//default value
  },
  office: {
    type: {
      name : String,
      capasity: Number
    },
    required: true,
  },
  schadule: {
    type: Array,
  },

  attendance: {
    type: Array, // the object here {date:...., type:"in"/"out"}
  },
  firstLogin : {
    type:Boolean
  },
  hours:{
    type:Number // hours spend in Uni in minites .
  },
  head : {
    type: Boolean,
  },
  instructor : {
    type: Boolean,
  },
  coordinator : {
    type: Boolean,
  },
  ta : {
    type: Boolean,
  },
  dayinfo:{
    type:Array
  },
  annual_leave_balance:{  // this inc by 2.5 everymonth
    type:Number
  },
  numofholidays:{  // to calcluate the number of missing days at the end of the month if excceded the annual leave
    type:Number
  },
  sentLeaveRequest:{
    type:Array
  },
  holidayRequests:{
    type:Array
  },
  holidays:{
    type:Array
  },
  missingdays:{ // to calcluate the number of missing days at the end of the month if excceded the annual leave
    type:Number
  },
  AccidentalCount:{
    type:Number
  },
  sentReplacment: {  //{day,request,course,slot,status,to,loc}
    type: Array
  },
  receivedReplacment: { //{day,request,course,slot,status,from,loc,date}
    type: Array
  },
  replacmentRequestschadule:{
    type:Array
  },
  course: { //in case of coordinator
    type: String
  },
  slotLinkingSentRequests: { //{day,request,course,slot,status,to,id}
    type: Array
  },

  slotLinkingReceivedRequests: { //{day,request,course,slot,status,from,id}
    type: Array
  },
  receivedDayoffRequest: { //{day,reason,status,from,id}
    type: Array
  },

  sentDayoffRequest: { //{day,reason,status,to,id}
    type: Array
  },

  receivedLeavefRequest: { //{day,reason,course,dateLeave,dateArrive,status,from,id,type}
    type: Array
  },

  sentLeaveRequest: { //{date,course,slot,day}
    type: Array
  }
})

const acMember = new mongoose.model("acMember", schema);

module.exports=acMember;
