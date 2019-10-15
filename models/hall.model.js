const mongoose = require('mongoose');

const hallSchema = new mongoose.Schema({
    
    name: {
        type: String,
    },
    roomNo: {
        type: String
    },
    studentID:{
        type:String,
        ref:'student'
    }
    },{
    toJSON:{
        virtuals:true
    },
    toObject:{
        virtuals:true
    }
});

hallSchema.virtual('users',{
    ref:'student',
    localField:'studentID',
    foreignField:'studID',
    justOne:true
});

module.exports = mongoose.model('Hall', hallSchema);
