const fspromises = require('fs').promises
const path = require('path')


async function readDatabase(argument) {
    await fspromises.readFile(path(.)), (err, data) =>
    {
        if (err) {
            
        }
        return data
    })



}
It should read the database asynchronously
It should return a promise
When the file is not accessible, it should reject the promise with the error
When the file can be read, it should return an object of arrays of the firstname of students per fields
