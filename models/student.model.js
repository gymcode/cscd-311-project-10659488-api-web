const mongoose = require('mongoose');
require("./hall.model");

const studentSchema = new mongoose.Schema({
    name: {
        type: String
    },
    studID: {
        type: String
    },
    gender: {
        type: String
    },
    level: {
        type: String
    },
    password:{
        type: String
    }
});

module.exports = mongoose.model('Student', studentSchema);