const express =  require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const Student = require("../models/student.model");
// const Student = mongoose.model('Student');

router.get('/', (req, res)=>{
    res.render('student/login',{
        viewTitle: "Login"
    });
});

router.post('/', async(req, res)=>{
    
    try {
        const student = await Student.findOne({name: req.body.name});
        bcrypt.compare(req.body.password, student.password, (err, isMatch)=>{
            if (isMatch) {
                res.redirect("/studentHall")
            }
            else{
                res.send("mern stack");
            }
        });
    } catch (err) {
        console.log("lost");
    }

   
   
});

module.exports = router;

