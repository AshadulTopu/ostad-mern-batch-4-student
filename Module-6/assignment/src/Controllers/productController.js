// note: create, read, delete, update naming conversion are not mandatory. those are changeable

exports.create = (req,res)=>{
    res.send('new product Create success')
}

exports.read = (req,res)=>{
    res.send('product description Read done')
}
exports.delete = (req,res)=>{
    res.send('Products page Delete success')
}
exports.update = (req,res)=>{
    res.send('Products page update success')
}