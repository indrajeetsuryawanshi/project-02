const express = require('express');
const router = express.Router();

const CollegeController= require('../Controller/collegeController')
const InternController= require('../Controller/internController')

router.post("/functionup/colleges",CollegeController.createCollege)

router.post("/functionup/interns",InternController.createIntern)


router.get("/functionup/collegeDetails",CollegeController.getCollegeDetails)

router.all("/*", function (req ,res){
    res.status(400).send("Invalid request........!!!")
})













module.exports = router;