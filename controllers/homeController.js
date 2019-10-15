const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.render('student/home', {
      viewTitle: "Welcome Home!!! Already have an account or about to experience comfort"
    });
});

module.exports = router;