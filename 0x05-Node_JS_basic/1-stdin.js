console.log('Welcome to Holberton School, what is your name?');
process.stdin.setEncoding('utf8');

process.stdin.resume();

process.stdin.on('data', (data) => {
  const val = process.stdin.read();
  process.stdout.write(`Your name is: ${data}`);
  if (process.stdin.isTTY) {
    process.stdin.end();
    process.exit(0);
  } else {
    console.log('This important software is now closing\n');
  }
  // process.on('SIGINT', () => {
  //   console.log('This important software is now closing\n');
  //   return process.exit(0);
  // });
});

//process.stdin.on('data', (data) => {
//  process.stdout.write(`Your name is: ${data}`);
//});
