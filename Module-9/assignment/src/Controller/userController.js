exports.create = (req,res)=>{
    res.status(201).json({status:"create", data: "User Created successfully"})
}
exports.read = (req,res)=>{
    res.status(200).json({status:"success", data: "User Read successfully"})
}
exports.delete = (req,res)=>{
    res.status(204).json({status:"success", data: "User Deleted successfully"})
}
exports.update = (req,res)=>{
    res.status(204).json({status:"success", data: "User Updated successfully"})
}