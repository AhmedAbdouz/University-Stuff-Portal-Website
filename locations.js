const mongoose = require("mongoose");

const schema = mongoose.Schema({

    name: {
        type: String,
        required: true,
        unique: true
    },

    capcity: {
        type: Number,
        required: true
    },
    type: {
        type: String,
    }

})

const locations = new mongoose.model("locations", schema);

module.exports = locations;
