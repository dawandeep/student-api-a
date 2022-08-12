const StudentModel = require('../models/StudentModel');
const {v4:uuidv4}= require('uuid')
const GetStudents=()=>{
    return new Promise((resolve,reject)=>{
        StudentModel.find({},(err,data)=>{
        if(!err)
        {
          resolve(data)
        }
        else{
            reject(err)
        }
    })
    })
}
const GetStudent =(id)=>{
    return new Promise ((resolve,reject)=>{
        StudentModel.findOne({_id:id},(err,data)=>{
            if(!err){
                resolve(data)
            }
            else{
                reject(err)
            }
        })
    })
}
const AddStudent=(student)=>{
   return new Promise((resolve,reject)=>{
    let newStudent = new StudentModel({
        _id:uuidv4(),
        firstname:student.firstname,
        lastname:student.lastname,
        class:student.class,
        age:student.age,
        gender:student.gender,
        address:student.address,
        course:student.course,
        image:student.image,
        mob:student.mob,
        fees:student.fees,
    })
    newStudent.save((err)=>{
        if(!err)
        {
            resolve("Student added successfully ")
        }
        else{
            reject(err)
        }
    })
   })
}
const UpdateStudent=(id,student)=>{
    return new Promise((resolve,reject)=>{
    let newStudent = new StudentModel({
        firstname:student.firstname,
        lastname:student.lastname,
        class:student.class,
        age:student.age,
        gender:student.gender,
        address:student.address,
        course:student.course,
        image:student.image,
        mob:student.mob,
        fees:student.fees,
    })
    StudentModel.findOneAndUpdate({_id:id},newStudent,(err,data)=>{
        if(!err){
                resolve("Your student is updated successfully")
            }
            else{
                reject(err)
            }
    })
    })
}
const DeleteStudent =(id)=>{
    return new Promise((resolve,reject)=>{
        StudentModel.deleteOne({_id:id},(err,data)=>{
            if(!err){
                resolve("Your Student is deleted successfully")
            }
            else{
                reject(err)
            }
        })
    })
}
const GetStudentByFees=(fee)=>
{
    return new Promise((resolve,reject)=>{
      StudentModel.find({fees:fee},(err,data)=>{
        if(!err){
            resolve(data)
        }
        else{
            reject(err)
        }
      })
    })
}

module.exports={GetStudent,GetStudents,AddStudent,DeleteStudent,UpdateStudent,GetStudentByFees}