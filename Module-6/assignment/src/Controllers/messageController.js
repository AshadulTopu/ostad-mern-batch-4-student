// note: create, read, delete, update naming conversion are not mandatory. those are changeable

exports.create = (req,res)=>{
    res.send('Message send success')
}

exports.read = (req,res)=>{
    res.send('message Read done')
}
exports.delete = (req,res)=>{
    res.send('massage Delete success')
}
exports.update = (req,res)=>{
    res.send('message update success')
}