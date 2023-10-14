const mongoose = require("mongoose");

const otpSchema = mongoose.Schema(
    {
        email: { type: String },
        otp: { type: String },
        status: { type: Number },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

const otpModel = mongoose.model("otp", otpSchema);
module.exports = otpModel;
