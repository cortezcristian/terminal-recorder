var term;
window.addEventListener('load', function() {
    term = new Terminal({
      cols: 80,
      rows: 24,
      screenKeys: true
    });

    term.on('data', function(data) {
      //socket.emit('data', data);
      console.log("typed data:", data);
      //term.write(data);
    });

    term.on('title', function(title) {
      document.title = title;
    });

    term.open(document.getElementById('terminal'));

    //term.write('\x1b[31mWelcome to term.js!\x1b[m\r\n');

/*
    socket.on('data', function(data) {
      term.write(data);
    });
*/

    //term.destroy();
}, false);

