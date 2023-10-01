exports.create = (req,res)=>{
    res.status(201).json({status:"create", data: "SubAdmin Created successfully"})
}
exports.read = (req,res)=>{
    res.status(200).json({status:"success", data: "SubAdmin Read successfully"})
}
exports.delete = (req,res)=>{
    res.status(204).json({status:"success", data: "SubAdmin Deleted successfully"})
}
exports.update = (req,res)=>{
    res.status(204).json({status:"success", data: "SubAdmin Updated successfully"})
}