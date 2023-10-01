exports.create = (req,res)=>{
    res.status(201).json({status:"create", data: "Post Created successfully"})
}
exports.read = (req,res)=>{
    res.status(200).json({status:"success", data: "Post Read successfully"})
}
exports.delete = (req,res)=>{
    res.status(204).json({status:"success", data: "Post Deleted successfully"})
}
exports.update = (req,res)=>{
    res.status(204).json({status:"success", data: "Post Updated successfully"})
}