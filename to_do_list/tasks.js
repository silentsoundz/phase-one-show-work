#!/usr/bin/env node

// chmod 755 ./tasks.js 

const fs = require('fs')
const add = require('./commands/add')
const command = require = process.argv[2]
const task = process.argv[3]

switch (command) {
  case "add":
    add(task)
    break
    case "list":
    case "complete":
    case "delete":
    default:
      console.error ('Thats not an acceptable command')
}
