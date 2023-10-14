const mongoose = require("mongoose");

const worksSchema = mongoose.Schema(
    {
        title: { type: String },
        classNote: { type: String },
        description: { type: String },
        status: { type: String },
        email: { type: String },
    },
    {
        versionKey: false,
        timestamps: true,
    }
)

const worksModel = mongoose.model("works", worksSchema);
module.exports = worksModel;