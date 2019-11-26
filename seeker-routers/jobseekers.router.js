const express = require('express');
const router = express.Router();
const jobseekers = require ('../seeker-controllers/jobseeker.ctrls');

router.get('/jobseekers', jobseekers.getJobseeker);
router.get('/jobseekers/:id', jobseekers.getJobseekerByID);
router.post('/addJobseeker', jobseekers.addJobseeker);
router.put('/updateJobseeker/:id', jobseekers.update);
router.delete('/deleteJobseeker/:id', jobseekers.delete);

module.exports = router;