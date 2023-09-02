// note: create, read, delete, update naming conversion are not mandatory. those are changeable

exports.create = (req,res)=>{
    res.send('service page Create success')
}

exports.read = (req,res)=>{
    res.send('service page description Read done')
}
exports.delete = (req,res)=>{
    res.send('service page Delete success')
}
exports.update = (req,res)=>{
    res.send('service page update success')
}