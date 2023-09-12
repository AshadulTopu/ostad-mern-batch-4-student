exports.create = (req,res)=>{
    res.status(201).json({status:"create", data: "Created Message API"})
}

exports.read = (req,res)=>{
    res.status(200).json({status:"success", data: "Read Message API"})
}
exports.delete = (req,res)=>{
    res.status(204).json({status:"success", data: "Deleted Message API"})
}
exports.update = (req,res)=>{
    res.status(204).json({status:"success", data: "Update Message API"})
}