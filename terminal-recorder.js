#!/usr/bin/env node
var program = require('commander');
var pack = require('./package.json');
var fs = require('fs');
var ncp = require('ncp').ncp;

program
  .version(pack.version)
  .option('-o, --outpath [path]', 'Add the specified [path] to place the folder that will contain the recorded html files')
  .parse(process.argv);


if (!program.outpath){
    console.log('You should specify the output path first. In example:');
    console.log('\n   $ terminal-recorder -o ./your-path/should-be-here/ \n');
    console.log('terminal-recorder existing now!');
    process.exit();
}

var fname = 'terminal-recorder-html';
var folderout = program.outpath;
var folderdest = folderout+'/'+fname;

fs.mkdir(folderout+'/'+fname, function(err){
    ncp('./template/', folderdest, function (err) {
        //console.log('copied');
    
    });
});

var stdin = process.stdin,
    keypress = require('keypress'),
    Handlebars = require('handlebars'),
    pty = require('pty.js');

var end, start = new Date(), milestones = [];

var log = function(data, cb){
  fs.appendFile('./logs.txt', data, cb);
}

var logAction = function(data, cb){
  fs.appendFile('./actions.txt', data, cb);
}

var createMilestone = function(data, cb){
  end = new Date();
  milestones.push({
    time: (end - start),
    content: data.replace('"','\\"','g').replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/\r/g, '\\r')
  });
  if(cb) { cb(); }
}

var createTemplate = function(cb){
  var tplpath = folderdest+'/js/events.js.hbs';
  var tpldest = folderdest+'/js/events.js';
  fs.readFile(tplpath, 'utf8', function (err, source) {
    //console.log("file read");
    var template = Handlebars.compile(source);
    var data = {
        totaltime: milestones[milestones.length-1]['time'],
        marks: milestones    
    }
    var result = template(data);
    fs.writeFile(tpldest, result, function(err){
        //console.log("file write");
        //console.log(result);
        if(cb) { cb(); }
    });
  });
}

process.on('uncaughtException', function(err) {
    //console.log('Caught exception: ' + err);
});


console.log("----------------- Welcome to terminal-recorder ----------------------");
console.log("Warning: We are saving keystrokes, donnot enter any password");
console.log("Remember: Hit ctrl+c to quit");
console.log("---------------------------------------------------------------------");
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
  //log('c-out: '+data+'\r', function (err) {
  log(data, function (err) {
    createMilestone(data, function(){
        process.stdout.write(data);
    }); 
  });
});



keypress(process.stdin);

// on any data into stdin
stdin.on( 'keypress', function( ch, key ){
  // ctrl-c ( end of text )
  if ( ch === '\u0003' ) {
    //console.log(milestones);
    // save envents
    createTemplate(function(){
        console.log("\n----------------- See the exported files in ----------------------\n");
        console.log("Destination folder: "+folderdest+"\n");
        console.log("Credits: @cortezcristian www.cortezcristian.com\n");
        console.log("\n----------------- Bye :P ----------------------\n");
        process.exit();
    });
  } else {
  //if ( ch !== null ) {
  //log('c-keypress: > '+ch+'\r', function (err) {
    //createMilestone(ch); 
    term.write( ch );
  }
  //});
  //}
});
