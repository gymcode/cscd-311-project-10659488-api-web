const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Hall = mongoose.model("Hall")


router.get('/', (req, res)=>{
    Hall.find((err, docs)=>{
        if(err) throw err;
        res.render("student/display", {
            display: docs
        });
    });
});

module.exports = router;