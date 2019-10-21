const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Student = mongoose.model("Student")
const Hall = mongoose.model("Hall");

router.get('/', (req, res)=>{
    Student.find((err, docs)=>{
        if(err) throw err;
        res.render("student/display", {
            display: docs
        });
    });
});

module.exports = router;