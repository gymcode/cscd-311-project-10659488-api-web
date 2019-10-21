const db = require("./models/db.js");
const session = require('express-session');
const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');
const loginController = require("./controllers/loginController");
const registerController = require("./controllers/registerController");
const hallController = require("./controllers/hallController");
const displayController = require("./controllers/displayController");
const logoutController = require("./controllers/logoutController");
const homeController = require("./controllers/homeController");
const TWO_HOURS = 1000 * 60 * 60 * 2;
const { 
    PORT = 4000, 

    //session lifetime
    SESS_NAME = 'sid',
    SESS_SECRET = 'ssh!this is a secret',
    SESS_LIFETIME = TWO_HOURS,
} = process.env;

//using middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/studentLogin', loginController);
app.use('/studentRegister', registerController);
app.use('/studentHall', hallController);
app.use('/display', displayController);
app.use('/logout', logoutController);
app.use('/', homeController);
app.use(express.static(path.join(__dirname, 'public')));
//express sessions
app.use(
    session({
        saveUninitialized:false,
        secret: SESS_SECRET,
        resave: false,
        name: SESS_NAME,
        cookie: {
            maxAge: SESS_LIFETIME,
            sameSite: true,
            secure: true,
        }
    })
);


app.set("views", path.join(__dirname, "/views/"));
app.engine('hbs', exphbs({
    extname: "hbs",
    defaultLayout: "mainlayout",
    layoutDir: __dirname + "/views/layouts"
}));
app.set('view engine', 'hbs');

app.get('/home', (req, res)=>{
    res.render('student/home');
});

app.get("/studentRegister", (req, res)=>{
    res.render('student/register');
});

app.get("/studentLogin", (req, res)=>{
    res.render("student/login");
});


app.listen(PORT, (err)=>{
    if(err) throw err
    console.log(`Server running on http://localhost:${PORT}`);
})