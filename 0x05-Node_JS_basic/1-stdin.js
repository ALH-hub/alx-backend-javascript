console.log('Welcome to Holberton School, what is your name?');
process.stdin.setEncoding('utf8');

process.stdin.resume();

process.stdin.on('data', (data) => {
  const val = process.stdin.read();
  process.stdout.write(`Your name is: ${data}`);
  if (process.stdin.isTTY) {
    process.exit();
  }
   process.stdout.write('This important software is now closing\n');
   process.exit();
});

//process.stdin.on('data', (data) => {
//  process.stdout.write(`Your name is: ${data}`);
//});
