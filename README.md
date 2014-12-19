terminal-recorder
============

Terminal recorder allows you to record your bash session, and export it to html so then you can share it with your friends.

[See the demo](http://cortezcristian.com/terminal-recorder/)

Final output looks like this
![Demo Pic](https://raw.githubusercontent.com/cortezcristian/terminal-recorder/master/pics/demo.png)

## Features

* Records all keystrokes sent to stdin
* Saves stdout in a log file `logs.txt`
* Export actions to html

```bash
$ npm install -g terminal-recorder 
```

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
