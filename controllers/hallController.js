const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Hall = mongoose.model("Hall");

router.get('/', (req, res)=>{
    res.render('student/halls', {
        viewTitle: "Halls",
    });
});

router.post('/', (req, res)=>{
  
    Hall.countDocuments({roomNo: req.body.rooms})
    .then(d=>{
        if (d < 4 ) {
            const hall = new Hall();
            hall.name = req.body.hall;
            hall.roomNo = req.body.rooms
           
            hall.save((err, docs)=> {
               
                if (err) throw err  
                    res.redirect("/display");
            });
        } else {
            // redirecting to a page
            res.render("hallcontroller", {
                error: "Room is full Check another"
            })
        }
    })
});


module.exports = router;


