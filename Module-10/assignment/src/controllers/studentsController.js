
const studentsModel = require('../models/studentModel')

exports.createStudent = async (req, res) => {
    try {
        const student = await studentsModel.create(req.body)
        res.status(201).send(student)
    } catch (error) {
        res.status(500).send(error)
    }
}

// get all students
exports.getAllStudents = async (req, res) => {
    try {
        const students = await studentsModel.find();
        res.status(200).send(students);
    } catch (error) {
        res.status(500).send(error);
    }
};


// get single student 
exports.getSingleStudent = async (req, res) => {
    let id = req.user._id
    console.log(id);
    try {
        const student = await studentsModel.findById(id)
        res.status(200).send(student)
    } catch (error) {
        res.status(500).send(error)
    }
}

// delete student 
exports.deleteStudent = async (req, res) => {
    let id = req.user._id
    try {
        await studentsModel.findByIdAndDelete(id);
        res.status(200).send("Student deleted successfully");
    } catch (error) {
        res.status(500).send(error);
    }
}

// update student
exports.updateStudent = async (req, res) => {
    let id = req.user._id
    try {
        const student = await studentsModel.findByIdAndUpdate(id, req.body);
        res.status(200).send(student);
    } catch (error) {
        res.status(500).send(error);
    }
}

