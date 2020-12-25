const mongoose = require("mongoose");

const schema = mongoose.Schema({

    hr_Counter:{
        type:Number
    },
    ac_Counter:{
        type:Number
    },
    requestID:{
        type:Number
    }
})

const constants = new mongoose.model("constants", schema);

module.exports = constants;
