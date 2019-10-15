const mongoose = require('mongoose');
//additions must be made
const DbUrl = 'mongodb://localhost:27017/StudentDB';

//creating a database connection
mongoose.connect(DbUrl, {useNewUrlParser: true}, (err)=>{
    if(err) throw err
    console.log('MongoDb connection successful');
});

require("./student.model");
require("./hall.model");