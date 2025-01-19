const express = require(express);
const countStudents = require('./3-read_file_async');

const app = express()
const port = 1245
app.wri



app.get('/', (req, res) => {
    res.set('content-type', 'text/plain');
    res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
    res.set('content-type', 'text/plain');
    res.send('This is the list of our students')
    data countStudents()
    re

})



When the URL path is /, it should display Hello Holberton School! in the page body
When the URL path is /students, it should display This is the list of our students followed by the same content as the file 3-read_file_async.js (with and without the database) - the name of the database must be passed as argument of the file
CSV file can contain empty lines (at the end) - and they are not a valid student!
