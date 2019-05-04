require('../src/db/mongoose')
const Task = require('../src/models/task')

const deleteTaskAndCount = async(id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: false})
    return count
}

deleteTaskAndCount("432423423423").then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})

// Task.findByIdAndDelete("5ccad653ec34d93b7403941f").then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })