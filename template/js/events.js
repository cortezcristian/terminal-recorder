//Timeline
var timeTotal = 92088+10;

var t = window.t = new Timeline({length: timeTotal, frequency:10 });

var stdouts = [
    { time: 0, content: '  terminal-recorder by @cortezcristian\r\n'}
    , { time: 309, content: "]2;crisboot@crisboot-Aspire-S3-391  ~/"}
    , { time: 312, content: "[m  [34mcrisboot[32m@crisboot-Aspire-S3-391 [m[1m[36m~$ [m"}
    , { time: 1260, content: "f"}
    , { time: 1360, content: "i"}
    , { time: 1760, content: "g"}
    , { time: 1848, content: "l"}
    , { time: 1982, content: "e"}
    , { time: 2069, content: "t"}
    , { time: 2194, content: " "}
    , { time: 2545, content: "a"}
    , { time: 2639, content: "m"}
    , { time: 2737, content: "a"}
    , { time: 2978, content: "z"}
    , { time: 3092, content: "o"}
    , { time: 3521, content: "[K"}
    , { time: 3711, content: "i"}
    , { time: 3822, content: "n"}
    , { time: 3875, content: "g"}
    , { time: 4470, content: " "}
    , { time: 4889, content: "w"}
    , { time: 5020, content: "o"}
    , { time: 5140, content: "r"}
    , { time: 5252, content: "k"}
    , { time: 6181, content: "\r\n]2;crisboot@crisboot-Aspire-S3-391  figlet amazing work"}
    , { time: 6185, content: "                           _                                  _    \r\n  __ _ _ __ ___   __ _ ___(_)_ __   __ _  __      _____  _ __| | __\r\n / _` | '_ ` _ \\ / _` |_  / | '_ \\ / _` | \\ \\ /\\ / / _ \\| '__| |/ /\r\n| (_| | | | | | | (_| |/ /| | | | | (_| |  \\ V  V / (_) | |  |   < \r\n \\__,_|_| |_| |_|\\__,_/___|_|_| |_|\\__, |   \\_/\\_/ \\___/|_|  |_|\\_\\\r\n                                   |___/                           \r\n"}
    , { time: 6186, content: "]2;crisboot@crisboot-Aspire-S3-391  ~/"}
    , { time: 6199, content: "[m  [34mcrisboot[32m@crisboot-Aspire-S3-391 [m[1m[36m~$ [m"}
    , { time: 7494, content: "[H[2J[m  [34mcrisboot[32m@crisboot-Aspire-S3-391 [m[1m[36m~$ [m"}
    , { time: 10021, content: "#"}
    , { time: 11260, content: "F"}
    , { time: 11568, content: "o"}
    , { time: 11967, content: "l"}
    , { time: 12082, content: "l"}
    , { time: 12244, content: "o"}
    , { time: 12378, content: "w"}
    , { time: 12483, content: " "}
    , { time: 12636, content: "m"}
    , { time: 12734, content: "e"}
    , { time: 12824, content: " "}
    , { time: 13041, content: "o"}
    , { time: 13288, content: "n"}
    , { time: 13444, content: " "}
    , { time: 14201, content: "t"}
    , { time: 14456, content: "w"}
    , { time: 14935, content: "i"}
    , { time: 15131, content: "t"}
    , { time: 15323, content: "t"}
    , { time: 15496, content: "e"}
    , { time: 15607, content: "r"}
    , { time: 16171, content: " "}
    , { time: 16807, content: "@"}
    , { time: 17153, content: "c"}
    , { time: 17306, content: "o"}
    , { time: 17449, content: "r"}
    , { time: 17640, content: "t"}
    , { time: 17699, content: "e"}
    , { time: 17981, content: "z"}
    , { time: 18176, content: "c"}
    , { time: 18385, content: "r"}
    , { time: 18515, content: "i"}
    , { time: 18642, content: "s"}
    , { time: 18762, content: "t"}
    , { time: 18890, content: "i"}
    , { time: 18986, content: "a"}
    , { time: 20233, content: "n"}
    , { time: 20686, content: "\r\n]2;crisboot@crisboot-Aspire-S3-391  ~/"}
    , { time: 20695, content: "[m  [34mcrisboot[32m@crisboot-Aspire-S3-391 [m[1m[36m~$ [m"}
    , { time: 21710, content: "[H[2J[m  [34mcrisboot[32m@crisboot-Aspire-S3-391 [m[1m[36m~$ [m"}
    , { time: 23077, content: "#"}
    , { time: 23483, content: "l"}
    , { time: 23589, content: "e"}
    , { time: 23792, content: "t"}
    , { time: 24246, content: "'"}
    , { time: 24702, content: "s"}
    , { time: 24861, content: " "}
    , { time: 25068, content: "s"}
    , { time: 25305, content: "e"}
    , { time: 25459, content: "e"}
    , { time: 25635, content: " "}
    , { time: 25757, content: "w"}
    , { time: 25960, content: "h"}
    , { time: 26093, content: "a"}
    , { time: 26582, content: "t"}
    , { time: 26771, content: " "}
    , { time: 26983, content: "t"}
    , { time: 27156, content: "h"}
    , { time: 27239, content: "i"}
    , { time: 27304, content: "s"}
    , { time: 27436, content: " "}
    , { time: 27643, content: "b"}
    , { time: 27695, content: "a"}
    , { time: 28015, content: "b"}
    , { time: 28691, content: "y"}
    , { time: 28879, content: " "}
    , { time: 29011, content: "c"}
    , { time: 29103, content: "a"}
    , { time: 29166, content: "n"}
    , { time: 29288, content: " "}
    , { time: 29419, content: "d"}
    , { time: 29554, content: "o"}
    , { time: 29922, content: "\r\n]2;crisboot@crisboot-Aspire-S3-391  ~/"}
    , { time: 29934, content: "[m  [34mcrisboot[32m@crisboot-Aspire-S3-391 [m[1m[36m~$ [m"}
    , { time: 34476, content: "#"}
    , { time: 34904, content: "o"}
    , { time: 35029, content: "p"}
    , { time: 35200, content: "e"}
    , { time: 35346, content: "n"}
    , { time: 35494, content: " "}
    , { time: 35690, content: "v"}
    , { time: 35796, content: "i"}
    , { time: 35881, content: "m"}
    , { time: 36462, content: "\r\n]2;crisboot@crisboot-Aspire-S3-391  ~/"}
    , { time: 36471, content: "[m  [34mcrisboot[32m@crisboot-Aspire-S3-391 [m[1m[36m~$ [m"}
    , { time: 37226, content: "v"}
    , { time: 37336, content: "i"}
    , { time: 37402, content: "m"}
    , { time: 37780, content: "\r\n]2;crisboot@crisboot-Aspire-S3-391  vim"}
    , { time: 37855, content: "7[?47h[?1h="}
    , { time: 37855, content: "[1;24r[m[H[2J[>c"}
    , { time: 37857, content: "[1;1H[33m  1 [m[4m                                                                            [m[2;1H[1m[34m~                                                                               [3;1H~                                                                               [4;1H~                                                                               [5;1H~                                                                               [6;1H~                                                                               [7;1H~                                                                               [8;1H~                                                                               [9;1H~                                                                               [10;1H~                                                                               [11;1H~                                                                               [12;1H~                                                                               [13;1H~                                                                               [14;1H~                                                                               [15;1H~                                                                               [16;1H~                                                                               [17;1H~                                                                               [18;1H~                                                                               [19;1H~                                                                               [20;1H~                                                                               [21;1H~                                                                               [22;1H~                                                                               [23;1H~                                                                               [m[24;63H0,0-1"}
    , { time: 37858, content: "[9CAll[6;32HVIM - Vi IMproved[8;33Hversion 7.3.547[9;29Hby Bram Moolenaar et al.[10;13HModified by pkg-vim-maintainers@lists.alioth.debian.org[11;19HVim is open source and freely distributable[13;26HHelp poor children in Uganda![14;18Htype  :help iccf[34m<Enter>[m       for information [16;18Htype  :q[34m<Enter>[m               to exit         [17;18Htype  :help[34m<Enter>[m  or  [34m<F1>[m  for on-line help[18;18Htype  :help version7[34m<Enter>[m   for version info[1;5H"}
    , { time: 41771, content: "[24;63H[K[24;1H:"}
    , { time: 42863, content: "."}
    , { time: 43099, content: "!"}
    , { time: 45384, content: "f"}
    , { time: 45563, content: "i"}
    , { time: 45830, content: "g"}
    , { time: 45963, content: "l"}
    , { time: 46090, content: "e"}
    , { time: 46167, content: "t"}
    , { time: 46329, content: " "}
    , { time: 49543, content: "t"}
    , { time: 49608, content: "e"}
    , { time: 49714, content: "r"}
    , { time: 49847, content: "m"}
    , { time: 50023, content: "i"}
    , { time: 50138, content: "n"}
    , { time: 50254, content: "a"}
    , { time: 50413, content: "l"}
    , { time: 52061, content: "\r"}
    , { time: 52108, content: "[1;5H[4m _[21C _[12C _[m\r\n[33m  2 [m| |_ ___ _ __ _ __ ___ (_)_ __   __ _| |[2;45H[K[3;1H[33m  3 [m| __/ _ \\ '__| '_ ` _ \\| | '_ \\ / _` | |[3;45H[K[4;1H[33m  4 [m| ||  __/ |  | | | | | | | | | | (_| | |[4;45H[K[5;1H[33m  5 [m \\__\\___|_|  |_| |_| |_|_|_| |_|\\__,_|_|[5;45H[K[6;1H[33m  6 [m                                        [6;45H[K[8;33H[1m[34m               [9;29H                        [10;13H                                                       [11;19H                                           [13;26H                             [14;18H                                              [16;18H                                              [17;18H                                              [18;18H                                              [m[24;63H1,2[11CAll[1;6H"}
    , { time: 55273, content: ""}
    , { time: 56222, content: " _                      _             _ [1;45H[K[2;5H[4m| |_ ___ _ __ _ __ ___ (_)_ __   __ _| |                                    [m[24;63H2[2;6H"}
    , { time: 56259, content: "[1;5H[4m _                      _             _                                     [m[2;5H| |_ ___ _ __ _ __ ___ (_)_ __   __ _| |[2;45H[K[24;63H1[1;6H"}
    , { time: 56590, content: ""}
    , { time: 56667, content: " _                      _             _ [1;45H[K[2;5H[4m| |_ ___ _ __ _ __ ___ (_)_ __   __ _| |                                    [m[24;63H2[2;6H"}
    , { time: 56794, content: "| |_ ___ _ __ _ __ ___ (_)_ __   __ _| |[2;45H[K[3;5H[4m| __/ _ \\ '__| '_ ` _ \\| | '_ \\ / _` | |                                    [m[24;63H3[3;6H"}
    , { time: 56937, content: "| __/ _ \\ '__| '_ ` _ \\| | '_ \\ / _` | |[3;45H[K[4;5H[4m| ||  __/ |  | | | | | | | | | | (_| | |                                    [m[24;63H4[4;6H"}
    , { time: 57142, content: "| ||  __/ |  | | | | | | | | | | (_| | |[4;45H[K[5;5H[4m \\__\\___|_|  |_| |_| |_|_|_| |_|\\__,_|_|                                    [m[24;63H5[5;6H"}
    , { time: 57311, content: " \\__\\___|_|  |_| |_| |_|_|_| |_|\\__,_|_|[5;45H[K[6;5H[4m                                                                            [m[24;63H6[6;6H"}
    , { time: 57538, content: ""}
    , { time: 59350, content: ""}
    , { time: 60153, content: "[24;1H[K[24;1H:"}
    , { time: 62173, content: "."}
    , { time: 62768, content: "!"}
    , { time: 63628, content: "f"}
    , { time: 63905, content: "i"}
    , { time: 64151, content: "g"}
    , { time: 64529, content: "l"}
    , { time: 64630, content: "e"}
    , { time: 64728, content: "t"}
    , { time: 65617, content: " "}
    , { time: 65803, content: "r"}
    , { time: 65895, content: "e"}
    , { time: 66194, content: "c"}
    , { time: 66398, content: "o"}
    , { time: 66535, content: "r"}
    , { time: 66895, content: "d"}
    , { time: 66980, content: "e"}
    , { time: 67136, content: "r"}
    , { time: 68138, content: "\r"}
    , { time: 68200, content: "[6;32H[4m _[m\r\n[33m  7 [m _ __ ___  ___ ___  _ __ __| | ___ _ __ [7;45H[K[8;1H[33m  8 [m| '__/ _ \\/ __/ _ \\| '__/ _` |/ _ \\ '__|[8;45H[K[9;1H[33m  9 [m| | |  __/ (_| (_) | | | (_| |  __/ |   [9;45H[K[10;1H[33m 10 [m|_|  \\___|\\___\\___/|_|  \\__,_|\\___|_|   [10;45H[K[11;1H[33m 11 [m                                        [11;45H[K[24;63H6,29[10CAll[6;33H"}
    , { time: 70401, content: "[24;1H[K[24;1H:"}
    , { time: 71314, content: "q"}
    , { time: 73847, content: "\r[1m[37m[41mE37: No write since last change (add ! to override)[m[11C6,29[10CAll[6;33H"}
    , { time: 74662, content: "[24;1H[K[24;1H:"}
    , { time: 75538, content: "q"}
    , { time: 75849, content: "!"}
    , { time: 76284, content: "\r[24;1H[K[24;1H[?1l>[2J[?47l8"}
    , { time: 76286, content: "]2;crisboot@crisboot-Aspire-S3-391  ~/"}
    , { time: 76302, content: "[m  [34mcrisboot[32m@crisboot-Aspire-S3-391 [m[1m[36m~$ [m"}
    , { time: 78140, content: "[H[2J[m  [34mcrisboot[32m@crisboot-Aspire-S3-391 [m[1m[36m~$ [m"}
    , { time: 79784, content: "t"}
    , { time: 79970, content: "h"}
    , { time: 80072, content: "a"}
    , { time: 80121, content: "t"}
    , { time: 80554, content: "'"}
    , { time: 80667, content: "s"}
    , { time: 80807, content: " "}
    , { time: 80937, content: "a"}
    , { time: 81083, content: "l"}
    , { time: 81223, content: "l"}
    , { time: 83043, content: "[K"}
    , { time: 83544, content: "[K"}
    , { time: 83575, content: "[K"}
    , { time: 83608, content: "[K"}
    , { time: 83639, content: "[K"}
    , { time: 83671, content: "[K"}
    , { time: 83702, content: "[K"}
    , { time: 83729, content: "[K"}
    , { time: 83762, content: "[K"}
    , { time: 83794, content: "[K"}
    , { time: 83825, content: ""}
    , { time: 83861, content: ""}
    , { time: 83885, content: ""}
    , { time: 83915, content: ""}
    , { time: 86615, content: "h"}
    , { time: 86723, content: "t"}
    , { time: 86842, content: "o"}
    , { time: 86973, content: "p"}
    , { time: 87276, content: "\r\n]2;crisboot@crisboot-Aspire-S3-391  htop"}
    , { time: 87312, content: ")07[?47h[1;24r[m[4l[?1h="}
    , { time: 87313, content: "[m[?1000h"}
    , { time: 87481, content: "[m[m[H[2J[1B  [36m1  [m[1m[[m[32m|||[30m[1m                       7.7%[m][m     [36mTasks: [1m175[m[36m, [1m595[m[36m thr; [32m[1m1[m[36m running[3;3H2  [m[1m[[m[32m|||[31m||||||||||||[30m[1m          46.2%[m][m     [36mLoad average: [30m[1m0.18 [m[m0.51 [1m0.73 [4;3H[m[36m3  [m[1m[[30m                          0.0%[m][m     [36mUptime: [1m05:51:39[5;3H[m[36m4  [m[1m[[30m                          0.0%[m][6;3H[m[36mMem[m[1m[[m[32m|||||||||||||||||||267[34m8/[33m3771MB[m[1m][7;3H[m[36mSwp[m[1m[[m[31m||||||[30m[1m              347/2047MB[m]\r[2B[m[30m[42m  PID USER      PRI [30m[46m NI [30m[42m VIRT   RES   SHR S CPU% MEM%   TIME+  Command          [10;1H[30m[46m 2614 crisboot   -6 -11  357M  3520  2196 S  0.0  0.1  0:11.22 /usr/bin/pulseaud[11;2H[m[m2619 crisboot   -6 [31m-11 [36m 357M  3[m[m520 [36m 2[m[m196 S  0.0  0.1  0:00.00 /usr/bin/pulseaud[12;2H2607 crisboot    9 [31m-11 [36m 357M  3[m[m520 [36m 2[m[m196 S  0.0  0.1  0:21.78 /usr/bin/pulseaud[13;5H1 [30m[1mroot      [m[m 20   0 [36m27[m[m060 [36m 2[m[m456 [36m 1[m[m264 S  0.0  0.1  0:01.40 /sbin/init[14;3H402 [30m[1mroot      [m[m 20   0 [36m15[m[m272   484   380 S  0.0  0.0  0:00.06 upstart-file-brid[15;3H431 [30m[1mroot      [m[m 20   0 [36m17[m[m320   668   516 S  0.0  0.0  0:00.18 upstart-udev-brid[16;3H433 [30m[1mroot      [m[m 20   0 [36m22[m[m272   952   704 S  0.0  0.0  0:00.19 /sbin/udevd --dae[17;3H801 [30m[1mroot      [m[m 20   0 [36m15[m[m260   480   380 S  0.0  0.0  0:00.03 upstart-socket-br[18;2H1211 [30m[1mroot      [m[m 20   0 [36m52[m[m256   972   968 S  0.0  0.0  0:00.00 /usr/sbin/sshd -D[19;2H1219 [30m[1mmessagebu [m[m 20   0 [36m24[m[m980 [36m 1[m[m992   892 S  0.0  0.1  0:03.25 dbus-daemon --sys[20;2H1228 [30m[1msyslog    [m[m 20   0 [36m 241M [m[m  940   940 S  0.0  0.0  0:00.91 rsyslogd -c5\r[1B 1229 [30m[1msyslog    [m[m 20   0 [36m 241M [m[m  940   940 S  0.0  0.0 "}
    , { time: 87481, content: " 0:00.24 rsyslogd -c5\r[1B 1230 [30m[1msyslog    [m[m 20   0 [36m 241M [m[m  940   940 S  0.0  0.0  0:00.07 rsyslogd -c5\r[1B 1227 [30m[1msyslog    [m[m 20   0 [36m 241M [m[m  940   940 S  0.0  0.0  0:02.41 rsyslogd -c5\r[1BF1[30m[46mHelp  [m[mF2[30m[46mSetup [m[mF3[30m[46mSearch[m[mF4[30m[46mFilter[m[mF5[30m[46mTree  [m[mF6[30m[46mSortBy[m[mF7[30m[46mNice -[m[mF8[30m[46mNice +[m[mF9[30m[46mKill  [m[mF10[30m[46mQuit [4ht[4l[H[m[m"}
    , { time: 89016, content: "[2;8H[31m|[30m[1m [2;33H4.0[3;8H[m[31m|[30m[1m             [3;32H 3.3[4;7H[m[32m||[4;33H[30m[1m5.2[4;57H[36m40[5;7H[m[32m|[31m|[5;33H[30m[1m2[6;29H[m[34m9[H[m[m"}
    , { time: 90552, content: "[2;33H[30m[1m5.9[3;33H2.0[4;8H[m[31m|[4;33H[30m[1m4.0[4;58H[36m2[5;33H[30m3.9[H[m[m"}
    , { time: 92088, content: "[2;8H[32m|[31m|[2;33H[30m[1m7.2[3;33H4.5[3;60H7 [m[m0.50[4;7H[34m|[32m|[31m|[4;33H[30m[1m2.6[4;58H[36m3[5;35H[30m3[H[m[m"}
];

//Markers
var m1;

for(var i=0; i<stdouts.length; i++) {
    m1 = {
        time: stdouts[i]['time'],
        content: stdouts[i]['content'],
        forward: function(){
          console.log("do action");
          term.write(this.content);
        },    
        backward: function(){ console.log("Undo action"); },    
    }

    t.markers.push(m1);
}

t.play();
