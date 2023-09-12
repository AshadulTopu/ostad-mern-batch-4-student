exports.create = (req,res)=>{
    res.status(201).json({status:"create", data: "Created Blog API"})
}
exports.read = (req,res)=>{
    res.status(200).json({status:"success", data: "Read Blog API"})
}
exports.delete = (req,res)=>{
    res.status(204).json({status:"success", data: "Deleted Blog API"})
}
exports.update = (req,res)=>{
    res.status(204).json({status:"success", data: "Update Blog API"})
}
