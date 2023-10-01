//1. create a new collection
db.createCollection('demo')

//2.Removes a collection from the database.
db.collection('demo').drop()

//3. Inserts a single document into a collection.
db.collection('demo').insertOne({name: 'Ostad'})

//4. Delete/remove a single document from the collection.
db.collection('demo').deleteOne({name: 'Ostad'})