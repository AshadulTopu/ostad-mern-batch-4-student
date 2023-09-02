// note: create, read, delete, update naming conversion are not mandatory. those are changeable

exports.create = (req,res)=>{
    res.send('Create Blog Details API')
}

exports.read = (req,res)=>{
    res.send('Read Blog Post Details')
}
exports.delete = (req,res)=>{
    res.send('Delete Blog Details Post')
}
exports.update = (req,res)=>{
    res.send('Blog Details Post update success')
}