exports.create = (req,res)=>{
    res.status(201).json({status:"create", data: "Created comment API"})
}

exports.read = (req,res)=>{
    res.status(200).json({status:"success", data: "Read comment API"})
}
exports.delete = (req,res)=>{
    res.status(204).json({status:"success", data: "Deleted Comment API"})
}
exports.update = (req,res)=>{
    res.status(204).json({status:"success", data: "Update Blog API"})
}