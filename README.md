terminal-rec
============

Terminal recorder

## Features

* Records all keystrokes sent to stdin
* Saves stdout in a log file `logs.txt`

```bash
$ 
```

## Comming soon
* Export actions to html

## Experimenting

Open a terminal:

```bash
$ tail -f logs.txt
```

Open a second terminal:
```bash
$ npm start
```

Start typing in the second console, and look how the first one is mimicking your moves.



## Know issues

* Record all keys, including passwords. So be careful with that.
* Doesn't support arrow keys yet.
