const express = require('express');
const { GetStudent, GetStudents, AddStudent, UpdateStudent, DeleteStudent, GetStudentByFees} = require('../controllers/StudentController');
const router = express.Router();
const {VerifyToken} = require('../middlewares/authToken')
router.get('/students',VerifyToken,GetStudents)
router.get('/students/:id',VerifyToken,GetStudent);
router.post('/students',VerifyToken,AddStudent)
router.put('/students/:id',VerifyToken,UpdateStudent)
router.delete('/students/:id',VerifyToken,DeleteStudent)
router.get('/student',VerifyToken,GetStudentByFees)
module.exports = router;