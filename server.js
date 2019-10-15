const db = require("./models/db.js");
const session = require('express-session');
const PORT = process.env.PORT || 4000;
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
        secret: 'secret',
        resave: true,
        saveUninitialized: true
    })
);


app.set("views", path.join(__dirname, "/views/"));
app.engine('hbs', exphbs({
    extname: "hbs",
    defaultLayout: "mainlayout",
    loyoutDir: __dirname + "/views/layouts"
}));
app.set('view engine', 'hbs');


app.get("/studentRegister", (req, res)=>{
    res.render('student/register');
});

app.get("/studentLogin", (req, res)=>{
    res.render("student/login");
});





app.listen(PORT, (err)=>{
    if(err) throw err
    console.log(`Server up and running on ${PORT}`);
})