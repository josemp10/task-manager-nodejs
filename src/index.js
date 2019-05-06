const express = require ('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send('Site is currently down, check back soon!')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port', port)
})

const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {
    // const task = await Task.findById('5ccfa6a469ec494bac7a16f6')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)

    //const user = await User.findById('5ccfa551ae46e75da822fbfd')
    //await user.populate('tasks').execPopulate()
    //console.log(user.tasks)
}

main()

// const jwt = require('jsonwebtoken')

// const myFunction = async() => {
//     const token = jwt.sign({ _id: 'abc123' }, 'thisismycourse', {expiresIn: '7 days'})
//     console.log(token)

//     const data = jwt.verify(token, 'thisismycourse')
//     console.log(data)
// }


//myFunction()
 
// const myFunction = async () => {
//     const password = "Red12345"
//     const hashedPassword = await bcrypt.hash(password, 8)

//     console.log(password)
//     console.log(hashedPassword)

//     const isMatch = await bcrypt.compare('Red1234', hashedPassword)
//     console.log(isMatch)
// }

// myFunction()