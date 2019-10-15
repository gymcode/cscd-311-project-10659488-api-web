const express = require('express');
const router = express.Router();
const session = require('express-session');

router.get('/', (req, res) => {
    delete req.session.user;
    res.redirect('/studentRegister');
 });


module.exports = router;