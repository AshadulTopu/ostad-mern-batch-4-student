
const worksModel = require('../models/worksModel')

// create work
exports.createWork = async (req, res) => {
    try {
        const work = await worksModel.create(req.body)
        res.status(201).send(work)
    } catch (error) {
        res.status(500).send(error)
    }
}

// get all works
exports.getAllWorks = async (req, res) => {
    try {
        const works = await worksModel.find();
        res.status(200).send(works);
    } catch (error) {
        res.status(500).send(error);
    }
};

// get single work
exports.getSingleWork = async (req, res) => {
    try {
        const work = await worksModel.findById(req.params.id);
        if (!work) {
            return res.status(404).send("Work not found");
        }
        res.status(200).send(work);
    } catch (error) {
        res.status(500).send(error);
    }
};

// delete work
exports.deleteWork = async (req, res) => {
    try {
        await worksModel.findByIdAndDelete(req.params.id);
        res.status(200).send("Work deleted successfully");
    } catch (error) {
        res.status(500).send(error);
    }
};

// update work
exports.updateWork = async (req, res) => {
    try {
        const updatedWork = await worksModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).send(updatedWork);
    } catch (error) {
        res.status(500).send(error);
    }
};

