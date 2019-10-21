const express = require('express');
const router = express.Router();
const session = require('express-session');

router.get('/', (req, res) => {
   
    res.redirect('/studentRegister');
 });


module.exports = router;