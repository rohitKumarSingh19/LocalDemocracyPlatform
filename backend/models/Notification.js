const mongoose=require('mongoose');
const notificationSchema=new mongoose.Schema({
    title:{
        type:String,
    },
    message:{
        type:String
    },
    neighborhood:{
        type:String,
    },
    timestamp:{
        type:Date,default:Date.now
    },
})
module.exports=mongoose.model('Notification',notificationSchema);