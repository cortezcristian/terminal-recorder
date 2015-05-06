terminal-recorder [![Dependencies](https://david-dm.org/cortezcristian/terminal-recorder.png)](https://david-dm.org/cortezcristian/terminal-recorder)
============

[![NPM](https://nodei.co/npm-dl/terminal-recorder.png?months=6&height=3)](https://nodei.co/npm/terminal-recorder/)

Terminal recorder allows you to record your bash session, and export it to html so then you can share it with your friends.

- [Latest Demo (with TimeLine)](http://cortezcristian.github.io/terminal-recorder/terminal-recorder-html/)

- [Basic Demo](http://cortezcristian.com/terminal-recorder/)


## Installation

[![NPM](https://nodei.co/npm/terminal-recorder.png?compact=true)](https://nodei.co/npm/terminal-recorder/)

```bash
$ [sudo] npm install -g terminal-recorder 
```

## Usage

```bash
$ terminal-recorder --help

  Usage: terminal-recorder [options]

  Options:

    -h, --help            output usage information
    -V, --version         output the version number
    -o, --outpath [path]  Add the specified [path] to place the folder 
                            that will contain the recorded html files

# Start recording
$ terminal-recorder

# recording...
[type your stuff and then hit Ctrl+c]

# Notice a new folder was created

$ tree terminal-recorder-html/ -L 1
terminal-recorder-html/
├── bower_components
├── bower.json
├── css
├── index.html
└── js

# Just open the index.html with your favourite browser
$ firefox terminal-recorder-html/index.html &

# See the magic ;)
```

Final output looks like this
![Demo Pic](https://raw.githubusercontent.com/cortezcristian/terminal-recorder/master/pics/demo-htop.png)

## Features

* Records all keystrokes sent to stdin
* Saves stdout in a log file `logs.txt`
* Export actions to html
* Timeline indicator
* Rollback actions

## Comming soon
* More templates
* Define starting cmd (Other than bash)
* Add param for picking cancelling key (Ctrl+c, Ctrl+d)
* Specify terminal size

## Experimenting

Open a terminal:

```bash
$ tail -f logs.txt
```

Open a second terminal:
```bash
$ terminal-recorder
```

Start typing in the second console, and look how the first one is mimicking your moves.



## Known issues

* Record all keys, including passwords. So be careful with that.
* OSX `pty.js` is not working ok on Mac because of a header misconfiguration. More info:
  - https://github.com/chjj/pty.js#todo
  - http://stackoverflow.com/a/24981514/467034
  - https://github.com/chjj/pty.js/issues/93

## Cool Stuff
Cool things that you can do:

```bash
$ filget awesomeness # Impress your friends
$ nethack # Play nethack
$ vim # Teach your friends with vim
$ htop # Show server state
$ tmux # Open the terminal multiplexor
$ cmatrix # feel like neo :)
```
## Credits
[@cortezcristian](https://twitter.com/cortezcristian)
