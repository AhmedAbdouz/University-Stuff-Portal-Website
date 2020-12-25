const mongoose = require("mongoose");

const schema = mongoose.Schema({

  head: {
    type: String // ID of the HOD
  },

  faculty: {
    type: String
  },
  name: {
    type: String,
    required : true,
    unique : true,
  },
  courses: {
    type: Array
  },
  staff:{
    type:Array
  }
})

const department = new mongoose.model("department", schema);

module.exports = department;
