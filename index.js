var stdin = process.stdin,
    fs = require('fs'),
    keypress = require('keypress'),
    pty = require('pty.js');

var log = function(data, cb){
  fs.appendFile('./logs.txt', data, cb);
}

console.log("----------------- Welcome ----------------------");
console.log("title", process.title);

var term = pty.spawn('bash', [], {
  name: 'xterm-color',
  //cols: 80,
  //rows: 30,
  stdio: [ 'pipe', 'pipe', 'pipe'],
  cwd: process.env.HOME,
  //cwd: process.cwd(),
  env: process.env
});

// without this, we would only get streams once enter is pressed
stdin.setRawMode( true );

// resume stdin in the parent process (node app won't quit all by itself
// unless an error or process.exit() happens)
stdin.resume();

// i don't want binary, do you?
stdin.setEncoding( 'utf8' );

term.on('data', function(data) {
  log('c-out: '+data+'\r', function (err) {
    process.stdout.write(data);
  });
});



keypress(process.stdin);

// on any data into stdin
stdin.on( 'keypress', function( ch, key ){
  // ctrl-c ( end of text )
  if ( ch === '\u0003' ) {
    console.log("\n----------------- Bye :P ----------------------\n");
    process.exit();
  }
  log('c-keypress: > '+ch+'\r', function (err) {
    term.write( ch );
  });
});
