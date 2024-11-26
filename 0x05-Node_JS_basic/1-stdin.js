const tty = require('tty');

if (!process.stdin.isTTY) {
  // Non-TTY input (piped)
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', (data) => {
    console.log(`Your name is: ${data.trim()}`);
    process.exit();
  });
} else {
  // TTY input (interactive)
  process.stdout.write('Welcome to Holberton School, what is your name? ');
  process.stdin.setRawMode(true);
  process.stdin.resume();

  process.stdin.on('data', (key) => {
    if (key === '\r') { // Enter key
      console.log(`Your name is: ${name}`);
      process.exit();
    } else if (key === '\u0003') { // Ctrl+C
      process.exit();
    } else {
      name += key;
      process.stdout.write(key);
    }
  });
}
