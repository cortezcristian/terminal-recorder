terminal-recorder
============

Terminal recorder allows you to record your bash session, and export it to html so then you can share it with your friends.

[See the demo](http://cortezcristian.com/terminal-recorder/)


## Installation

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

$ terminal-recorder -o .

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
![Demo Pic](https://raw.githubusercontent.com/cortezcristian/terminal-recorder/master/pics/demo.png)

## Features

* Records all keystrokes sent to stdin
* Saves stdout in a log file `logs.txt`
* Export actions to html

## Comming soon
* Timeline indicator
* Rollback actions

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



## Know issues

* Record all keys, including passwords. So be careful with that.
* Doesn't support arrow keys yet.

## Cool Stuff
Cool things that you can do:

```bash
$ filget awesomeness # Impress your friends
$ nethack # Play nethack
$ vim # Teach your friends with vim
$ htop # Show server state
```
## Credits
[@cortezcristian](https://twitter.com/cortezcristian)
