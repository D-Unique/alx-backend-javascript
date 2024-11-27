const { createServer } = require('node:http');
const countStudents = require('./3-read_file_async');

const port = 1245;
const host = 'localhost';

const app = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    const path = process.argv[2];
    countStudents(path);
    res.end();
  }
});

app.listen(port, host, () => {
  console.log(`app is listening to port http://${host}:${port}`);
});

module.exports = app;
