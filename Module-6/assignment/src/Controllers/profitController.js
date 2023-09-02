// note: create, read, delete, update naming conversion are not mandatory. those are changeable

exports.create = (req,res)=>{
    res.send('profit page Create success')
}

exports.read = (req,res)=>{
    res.send('profit page description Read done')
}
exports.delete = (req,res)=>{
    res.send('profit page Delete success')
}
exports.update = (req,res)=>{
    res.send('profit page update success')
}