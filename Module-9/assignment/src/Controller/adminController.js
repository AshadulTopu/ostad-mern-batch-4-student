exports.create = (req,res)=>{
    res.status(201).json({status:"create", data: "Admin Created successfully"})
}
exports.read = (req,res)=>{
    res.status(200).json({status:"success", data: "Admin Read successfully"})
}
exports.delete = (req,res)=>{
    res.status(204).json({status:"success", data: "Admin Deleted successfully"})
}
exports.update = (req,res)=>{
    res.status(204).json({status:"success", data: "Admin Updated successfully"})
}