const mongoose = require('mongoose')

const RegistrationSchema = new mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    nationality: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    admissionDate: {
        type: Date,
        required: true
    },
    courses: {
        type: String,
        required: true
    },
},
    {
        timestamps: true,
        versionKey: false
    })

const Registration = mongoose.model('Registration', RegistrationSchema)
module.exports = Registration