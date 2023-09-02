// note: create, read, delete, update naming conversion are not mandatory. those are changeable

exports.create = (req,res)=>{
    res.send('new project page Create success')
}

exports.read = (req,res)=>{
    res.send('project description Read done')
}
exports.delete = (req,res)=>{
    res.send('old project page Delete success')
}
exports.update = (req,res)=>{
    res.send('project page update success')
}