const  defaultcntrl=require('../seeker-controllers/default.seeker-crtl');
const express=require('express');
const router=express.Router();
router.get('/default',defaultcntrl.defaultCheck);
router.get('/healthcheck',defaultcntrl.healthCheck);

module.exports=router;