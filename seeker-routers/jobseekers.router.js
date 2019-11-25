const express = require('express');
const router = express.Router();
const jobseekers = require ('../seeker-controllers/jobseeker.ctrls');

router.get('/jobseekers', jobseekers.getjobseeker);
//router.get('/jobseekers/:id', jobseekers.getjobseekerByID);

module.exports = router;