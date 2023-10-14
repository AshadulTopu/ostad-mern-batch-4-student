
const studentModel = require('../models/studentModel')
const jwt = require('jsonwebtoken')

// login 
exports.login = async (req, res) => {
    try {
        const student = await studentModel.findOne({ email: req.body.email, password: req.body.password })
        if (!student) {
            return res.status(400).json("Student not found")
        }
        // const isPasswordMatched = await student.comparePassword(req.body.password)
        // if (!isPasswordMatched) {
        //     return res.status(400).send("Invalid Password")
        // }
        let payload = {
            _id: student._id,
            exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60)
        }
        const token = jwt.sign(payload, 'secret123456789')
        res.header('auth-token', token).json({token, student})
        // res.status(200).send(student)
    } catch (error) {
        res.status(500).json(error)
    }
}