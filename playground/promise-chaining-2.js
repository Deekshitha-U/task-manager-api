require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('66ec1c903fdb50dc6f6ad90a').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completetd: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('66ed0874c99e33bd0bc4725a').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})