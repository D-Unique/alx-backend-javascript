const { createServer } = require('node:http');

const app = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader = ('Content-Type', 'text/plain');
  res.write('Hello Holberton School!');
  res.end();
});

const port = '1245';
app.listen(port, () => {
  console.log(`app is listening to port: http://localhost:${port}`);
});

module.exports = app
