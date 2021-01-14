const mongoose = require("mongoose");

const schema = mongoose.Schema({

    name: {
        type: String,
        required: true,
        unique: true
    },

    capcity: {
        type: Number,
    },
    type: {
        type: String,
    }

})

const locations = new mongoose.model("locations", schema);

module.exports = locations;
