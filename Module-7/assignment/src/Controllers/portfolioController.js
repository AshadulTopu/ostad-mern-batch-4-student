exports.create = (req,res)=>{
    res.status(201).json({status:"create", data: "Created Portfolio API"})
}

exports.read = (req,res)=>{
    res.status(200).json({status:"success", data: "Read Portfolio API"})
}
exports.delete = (req,res)=>{
    res.status(204).json({status:"success", data: "Deleted Portfolio API"})
}
exports.update = (req,res)=>{
    res.status(204).json({status:"success", data: "Update Portfolio API"})
}