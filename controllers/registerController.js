const express =  require('express');
const router = express.Router();
const session = require('express-session');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const Student = mongoose.model('Student');
const Hall = mongoose.model("Hall");

router.get('/', (req, res)=>{
    res.render('student/register', {
        viewTitle: "Student registration"
    });
});

router.post('/', async(req, res)=>{

    const student = new Student();

    // // //encrypting the password
    // const hashedpassword = await bcrypt.hash(req.body.password, 10);
   
    student.name = req.body.name;
    student.studID = req.body.studID;
    student.gender = req.body.gender;
    student.password = req.body.password;
    student.level = req.body.level;
    bcrypt.genSalt(10, function(err, salt){
        bcrypt.hash(student.password, salt, function(err, hash){
            student.password = hash;
            student.save((err, docs)=>{
                //save dara in session 
               
            if (err) throw err;
            res.redirect('/studentHall');
            });
        })
    });
});

module.exports = router;

// const hashedpassword = await bcrypt.hash(req.body.password);

