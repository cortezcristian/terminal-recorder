var term;
window.addEventListener('load', function() {
    var hdr = document.querySelector('#terminal .hdr span');
    term = new Terminal({
      cols: 90,
      rows: 30,
      screenKeys: true
    });
  

    term.on('data', function(data) {
      //socket.emit('data', data);
      console.log("typed data:", data);
      //term.write(data);
    });

    term.on('title', function(title) {
      document.title = title;
      hdr.innerText = title;
    });

    term.open(document.querySelector('#terminal .bdy .content'));

    //term.write('\x1b[31mWelcome to term.js!\x1b[m\r\n');

/*
    socket.on('data', function(data) {
      term.write(data);
    });
*/

    //term.destroy();
}, false);

