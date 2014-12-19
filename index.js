var stdin = process.stdin,
    fs = require('fs'),
    pty = require('pty.js');

var log = function(data, cb){
  fs.appendFile('./logs.txt', data, cb);
}

/*
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
*/

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

/*
rl.on('line', function(line){
  log('c-line-in: '+line+'\r', function (err) {
    //term.write(line+'\r');
    //console.log(term.process);
    //console.log(line);
  });
});
*/


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
    //console.log(data);
  });
});


var keypress = require('keypress');

keypress(process.stdin);

// on any data into stdin
stdin.on( 'keypress', function( ch, key ){
  // ctrl-c ( end of text )
  if ( ch === '\u0003' ) {
    console.log("\n----------------- Bye ----------------------\n");
    process.exit();
  }
  log('c-keypress: '+key+" > "+ch+'\r', function (err) {
    term.write( ch );
  });
  // write the key to stdout all normal like
  //process.stdout.write( key );
});

// on any data into stdin
stdin.on('data', function( data ){
  // ctrl-c ( end of text )
  if ( data === '\u0003' ) {
    console.log("\n----------------- Bye ----------------------\n");
    process.exit();
  }
  //term.write(data);
});
