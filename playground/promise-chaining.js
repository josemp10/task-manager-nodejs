require('../src/db/mongoose')
const User = require('../src/models/user')

//"5ccaca950139cb098cbbf661"
//"5ccacab59c3a9346e0a091b7"

// User.findByIdAndUpdate("5ccacab59c3a9346e0a091b7", {age: 1}).then((user)=> {
//     console.log(user)
//     return User.countDocuments({age:1})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age})
    const count = await User.countDocuments({age})
    return count
}

updateAgeAndCount("5ccacab59c3a9346e0a091b7", 3).then((count) => {
    console.log('Entro aqui', count)
}).catch((e) => console.log(e))