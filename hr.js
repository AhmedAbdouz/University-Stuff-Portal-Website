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
  //  required: true,
  },
  attendance: {
    type: Array,   // the object here {date:...., type:"in"/"out"}
  },
  firstLogin : {
    type:Boolean
  },
  hours:{
    type:Number // hours spend in Uni in minites .
  },
  dayinfo:{   // this is updated every day
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
  missingdays:{
    type:Number
  },
  AccidentalCount:{
    type:Number
  },
  notification : {
    type: {
      noti : Array,
      num: Number
    }
  }
})

const hr = new mongoose.model("hr", schema);

module.exports=hr;
