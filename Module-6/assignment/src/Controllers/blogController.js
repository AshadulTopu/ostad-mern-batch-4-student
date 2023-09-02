// note: create, read, delete, update naming conversion are not mandatory. those are changeable

exports.create = (req,res)=>{
    res.send('Create Blog API')
}

exports.read = (req,res)=>{
    res.send('Read Blog Post')
}
exports.delete = (req,res)=>{
    res.send('Delete Blog Post')
}
exports.update = (req,res)=>{
    res.send('Blog Post update success')
}