const express=require('express');
const router=express.Router();
const auth=require('../middlewares/authMiddleware');
const {getNotifications,createNotification}=require('../controllers/notificationController');
router.get('/',auth,getNotifications);
router.post('/',auth,createNotification);//for Admins/mods maybe
module.exports=router;