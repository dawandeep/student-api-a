const repo = require('../repository/StudentRepository')

const GetStudents=(req,res)=>{
    repo.GetStudents()
    .then(data =>{
        res.status(200).send(data)
    })
}
const GetStudent=(req,res)=>{
    repo.GetStudent(req.params.id)
    .then(data =>{
        res.status(200).send(data)
    })
}
const AddStudent=(req,res)=>{
   repo.AddStudent(req.body)
   .then(data =>{
    res.status(201).send(data)
   })
}
const UpdateStudent=(req,res)=>{
    repo.UpdateStudent(req.params.id,req.body)
    .then(data =>{
    res.status(200).send(data)
   })
}
const DeleteStudent=(req,res)=>{
    repo.DeleteStudent(req.params.id)
    .then(data =>{
    res.status(200).send(data)
   })
}
const GetStudentByFees=(req,res)=>{
    repo.GetStudentByFees(req.query.fee)
    .then(data =>{
        res.status(200).send(data)
    })
}


module.exports={GetStudent,GetStudents,AddStudent,UpdateStudent,DeleteStudent,GetStudentByFees}