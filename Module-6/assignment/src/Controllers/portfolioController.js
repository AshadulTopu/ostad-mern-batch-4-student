// note: create, read, delete, update naming conversion are not mandatory. those are changeable

exports.create = (req,res)=>{
    res.send('Portfolio page Create success')
}

exports.read = (req,res)=>{
    res.send('Portfolio page Read done')
}
exports.delete = (req,res)=>{
    res.send('Portfolio page Delete success')
}
exports.update = (req,res)=>{
    res.send('Portfolio page update success')
}