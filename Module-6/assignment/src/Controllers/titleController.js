// note: create, read, delete, update naming conversion are not mandatory. those are changeable

exports.create = (req,res)=>{
    res.send('page Title Create success')
}

exports.read = (req,res)=>{
    res.send('page Title Read done')
}
exports.delete = (req,res)=>{
    res.send('page Title Delete success')
}
exports.update = (req,res)=>{
    res.send('page Title update success')
}