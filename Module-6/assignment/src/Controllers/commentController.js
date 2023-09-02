// note: create, read, delete, update naming conversion are not mandatory. those are changeable

exports.create = (req,res)=>{
    res.send('Comment Create success')
}

exports.read = (req,res)=>{
    res.send('comment Read done')
}
exports.delete = (req,res)=>{
    res.send('comment Delete success')
}
exports.update = (req,res)=>{
    res.send('comment update success')
}