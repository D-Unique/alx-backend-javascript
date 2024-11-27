const { createServer } = require('node:http');

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader = ('Content-Type', 'text/plain');
  res.write('Hello Holberton School!');
  res.end();
});

const port = '1245';
server.listen(port, () => {
  console.log(`server is listening to port: http://localhost:${port}`);
});
