const mongoose = require("mongoose");

const schema = mongoose.Schema({

  departments: {
    type: Array //contain the names of the departments inside the faculty
  },
  name: {
    type: String,
    required: true,
    unique: true
  },

})

schema.post('remove', (doc) => {
  console.log(doc._id);
  department.updateMany({ faculty: doc.name }, { faculty: 'UNASSIGNED' }).then(() => {
  });

})

const faculty = new mongoose.model("faculty", schema);

module.exports = faculty;
