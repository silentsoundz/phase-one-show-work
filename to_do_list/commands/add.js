const fs = require ('fs')
const path = require ('path')
const taskStoragePath = path.resolve(__dirname, '../tasks.json')

function add(task) {
  if(!fs.existsSync(taskStoragePath)) {
    addTaskAndStorage(task)
  } else {
    addtask(task)
  }
}

function addTaskAndStorage(task) {
  const initTaskStorage = JSON.stringify({
    taskIds: 1,
    storage: [{id: 1, name: task, complete: false}],
  })
  fs.writeFileSync(taskStoragePath, initTaskStorage)
  console.log("created task 1");
}

function addTask(task) {

  const taskHolder = JSON.parse(fs.readFileSync(taskStoragePath))

  const newTask = {id: taskHolder.storage.length + 1, name: task, complete: false}taskHolder["storage"].push(newTask)

  const stringifiedTaskHolder = JSON.stringify(taskHolder)
    fs.writeFileSync(taskStoragePath, stringifiedTaskHolder)

  console.log("Created task", taskHolder.storage[task.storage.length -1].id);
}

module.exports = add