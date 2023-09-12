exports.create = (req,res)=>{
    res.status(201).json({status:"create", data: "Created Product API"})
}

exports.read = (req,res)=>{
    res.status(200).json({status:"success", data: "Read Product API"})
}
exports.delete = (req,res)=>{
    res.status(204).json({status:"success", data: "Deleted Product API"})
}
exports.update = (req,res)=>{
    res.status(204).json({status:"success", data: "Update Product API"})
}