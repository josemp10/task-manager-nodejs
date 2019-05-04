// CRUD operations

const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
console.log(id.getTimestamp())

console.log(id.id.length)
console.log(id.toHexString().length)

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)

    db.collection('tasks').deleteOne({description: 'Clean the house'}).then( (result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })



    // db.collection('users').deleteMany({age: 40}).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany({completed: false}, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount)

    // }).catch(( error) => {
    //     console.log(error)
    // })

    // db.collection('users').updateOne({
    //     _id: new ObjectID("5cc96bdd1c116f1b8831e8d1")
    // }, {
    //     $set: {
    //         name: 'Mike'
    //     }
    // }).then( (result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('users').findOne({_id: new ObjectID("5cc97e67826df53a949cbc83")}, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to find')
    //     }
    //     console.log(user)
    // })

    // db.collection('users').find({age: 40}).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection('users').find({age: 40}).count((error, count) => {
    //     console.log(count)
    // })

    // console.log("Ahroa con las tasks")

    // db.collection('tasks').findOne({_id: new ObjectID("5cc9716e2bdc5a5664256242")}, (error, task) => {
    //     if (error) {
    //         return console.log('Unable to find')
    //     }
    //     console.log(task)
    // })


    // db.collection('tasks').find({completed: false}).toArray((error, tasks) => {
    //     console.log ("Not completed tasks")
    //     console.log(tasks)
    // }) 

    // db.collection('users').insertOne({
    //     name: 'Victor',
    //     age: 40
    // }, (error, result) => {
    //     if (error) {
    //         return console.log ('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })

//     db.collection('users').insertMany([
//         {
//             name: 'Rebecca',
//             age:32
//         },
//         {
//             name: 'Eric',
//             age:50
//         }
//     ], (error, result) => {
//         if (error) {
//             return console.log ('Unable to insert documents')
//         }

//         console.log(result.ops)
//     })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Clean the house',
    //         completed: true
    //     },
    //     {
    //         description: 'Renew inspection',
    //         completed: false
    //     },
    //     {
    //         description: 'Pot plants',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert tasks')
    //     }

    //     console.log(result.ops)
    // })



})

