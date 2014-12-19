//Timeline
var timeTotal = 182984+10;

var t = window.t = new Timeline({length: timeTotal, frequency:10 });

var stdouts = [
    { time: 0, content: '  terminal-recorder by @cortezcristian\r\n'}
    , { time: 313, content: "]2;crisboot@crisboot-Aspire-S3-391  ~/"}
    , { time: 321, content: "[m  [34mcrisboot[32m@crisboot-Aspire-S3-391 [m[1m[36m~$ [m"}
    , { time: 945, content: "[H[2J[m  [34mcrisboot[32m@crisboot-Aspire-S3-391 [m[1m[36m~$ [m"}
    , { time: 1877, content: "h"}
    , { time: 1950, content: "i"}
    , { time: 2111, content: " "}
    , { time: 2228, content: "t"}
    , { time: 2328, content: "h"}
    , { time: 2431, content: "e"}
    , { time: 2541, content: "r"}
    , { time: 2631, content: "e"}
    , { time: 3852, content: "[K"}
    , { time: 4352, content: "[K"}
    , { time: 4383, content: "[K"}
    , { time: 4416, content: "[K"}
    , { time: 4446, content: "[K"}
    , { time: 4478, content: "[K"}
    , { time: 4507, content: "[K"}
    , { time: 4539, content: "[K"}
    , { time: 4569, content: ""}
    , { time: 5241, content: "i"}
    , { time: 5923, content: "'"}
    , { time: 6412, content: "m"}
    , { time: 6586, content: " "}
    , { time: 7526, content: "@"}
    , { time: 7780, content: "c"}
    , { time: 7906, content: "o"}
    , { time: 8066, content: "r"}
    , { time: 8282, content: "t"}
    , { time: 8361, content: "e"}
    , { time: 8602, content: "z"}
    , { time: 8782, content: "c"}
    , { time: 8983, content: "r"}
    , { time: 9098, content: "i"}
    , { time: 9239, content: "s"}
    , { time: 9363, content: "t"}
    , { time: 9597, content: "i"}
    , { time: 9836, content: "a"}
    , { time: 9955, content: "n"}
    , { time: 11188, content: "[K"}
    , { time: 11689, content: "[K"}
    , { time: 11721, content: "[K"}
    , { time: 11751, content: "[K"}
    , { time: 11782, content: "[K"}
    , { time: 11814, content: "[K"}
    , { time: 11844, content: "[K"}
    , { time: 11875, content: "[K"}
    , { time: 11907, content: "[K"}
    , { time: 11935, content: "[K"}
    , { time: 11966, content: "[K"}
    , { time: 11998, content: "[K"}
    , { time: 12029, content: "[K"}
    , { time: 12059, content: "[K"}
    , { time: 12091, content: "[K"}
    , { time: 12128, content: "[K"}
    , { time: 12154, content: "[K"}
    , { time: 12183, content: "[K"}
    , { time: 12213, content: "[K"}
    , { time: 12244, content: ""}
    , { time: 12274, content: ""}
    , { time: 12307, content: ""}
    , { time: 12337, content: ""}
    , { time: 12417, content: "a"}
    , { time: 12709, content: "n"}
    , { time: 12888, content: "d"}
    , { time: 13030, content: " "}
    , { time: 13197, content: "t"}
    , { time: 13289, content: "h"}
    , { time: 13366, content: "i"}
    , { time: 13517, content: "s"}
    , { time: 13577, content: " "}
    , { time: 13977, content: "i"}
    , { time: 14097, content: "s"}
    , { time: 14186, content: " "}
    , { time: 14371, content: "t"}
    , { time: 14469, content: "e"}
    , { time: 14596, content: "r"}
    , { time: 14688, content: "m"}
    , { time: 14852, content: "i"}
    , { time: 14930, content: "n"}
    , { time: 15010, content: "a"}
    , { time: 15157, content: "l"}
    , { time: 15450, content: "-"}
    , { time: 15608, content: "r"}
    , { time: 15663, content: "e"}
    , { time: 16009, content: "c"}
    , { time: 16147, content: "o"}
    , { time: 16275, content: "r"}
    , { time: 16527, content: "d"}
    , { time: 16589, content: "e"}
    , { time: 16729, content: "r"}
    , { time: 17639, content: "[K"}
    , { time: 18140, content: "[K"}
    , { time: 18171, content: "[K"}
    , { time: 18201, content: "[K"}
    , { time: 18235, content: "[K"}
    , { time: 18266, content: "[K"}
    , { time: 18298, content: "[K"}
    , { time: 18327, content: "[K"}
    , { time: 18357, content: "[K"}
    , { time: 18389, content: "[K"}
    , { time: 18420, content: "[K"}
    , { time: 18450, content: "[K"}
    , { time: 18481, content: "[K"}
    , { time: 18511, content: "[K"}
    , { time: 18542, content: "[K"}
    , { time: 18574, content: "[K"}
    , { time: 18605, content: "[K"}
    , { time: 18636, content: "[K"}
    , { time: 18667, content: "[K"}
    , { time: 18698, content: "[K"}
    , { time: 18729, content: "[K"}
    , { time: 18761, content: "[K"}
    , { time: 18790, content: "[K"}
    , { time: 18821, content: "[K"}
    , { time: 18852, content: "[K"}
    , { time: 18884, content: "[K"}
    , { time: 18915, content: "[K"}
    , { time: 18945, content: "[K"}
    , { time: 18977, content: "[K"}
    , { time: 19010, content: ""}
    , { time: 19039, content: ""}
    , { time: 19070, content: ""}
    , { time: 19101, content: ""}
    , { time: 19882, content: "w"}
    , { time: 20177, content: "h"}
    , { time: 20270, content: "a"}
    , { time: 20370, content: "t"}
    , { time: 20483, content: " "}
    , { time: 20686, content: "y"}
    , { time: 20793, content: "o"}
    , { time: 20875, content: "u"}
    , { time: 21017, content: " "}
    , { time: 21163, content: "c"}
    , { time: 21241, content: "a"}
    , { time: 21274, content: "n"}
    , { time: 21489, content: " "}
    , { time: 21612, content: "d"}
    , { time: 21717, content: "o"}
    , { time: 21870, content: " "}
    , { time: 22140, content: "w"}
    , { time: 22314, content: "i"}
    , { time: 22746, content: "t"}
    , { time: 23015, content: "h"}
    , { time: 23157, content: " "}
    , { time: 23361, content: "i"}
    , { time: 23480, content: "t"}
    , { time: 24066, content: "?"}
    , { time: 25169, content: "[K"}
    , { time: 25672, content: "[K"}
    , { time: 25702, content: "[K"}
    , { time: 25734, content: "[K"}
    , { time: 25765, content: "[K"}
    , { time: 25795, content: "[K"}
    , { time: 25827, content: "[K"}
    , { time: 25857, content: "[K"}
    , { time: 25888, content: "[K"}
    , { time: 25918, content: "[K"}
    , { time: 25951, content: "[K"}
    , { time: 25981, content: "[K"}
    , { time: 26012, content: "[K"}
    , { time: 26044, content: "[K"}
    , { time: 26074, content: "[K"}
    , { time: 26106, content: "[K"}
    , { time: 26137, content: "[K"}
    , { time: 26167, content: "[K"}
    , { time: 26198, content: "[K"}
    , { time: 26228, content: "[K"}
    , { time: 26257, content: "[K"}
    , { time: 26290, content: "[K"}
    , { time: 26321, content: "[K"}
    , { time: 26351, content: "[K"}
    , { time: 26382, content: ""}
    , { time: 26414, content: ""}
    , { time: 27218, content: "p"}
    , { time: 27323, content: "l"}
    , { time: 27461, content: "a"}
    , { time: 28525, content: "y"}
    , { time: 28769, content: " "}
    , { time: 28958, content: "w"}
    , { time: 29153, content: "i"}
    , { time: 29448, content: "t"}
    , { time: 29742, content: "h"}
    , { time: 29886, content: " "}
    , { time: 30324, content: "f"}
    , { time: 30438, content: "i"}
    , { time: 30741, content: "g"}
    , { time: 30857, content: "l"}
    , { time: 31001, content: "e"}
    , { time: 31187, content: "t"}
    , { time: 31913, content: "[K"}
    , { time: 32414, content: "[K"}
    , { time: 32445, content: "[K"}
    , { time: 32477, content: "[K"}
    , { time: 32509, content: "[K"}
    , { time: 32539, content: "[K"}
    , { time: 32569, content: "[K"}
    , { time: 32604, content: "[K"}
    , { time: 32632, content: "[K"}
    , { time: 32662, content: "[K"}
    , { time: 32695, content: "[K"}
    , { time: 32724, content: "[K"}
    , { time: 32755, content: "[K"}
    , { time: 32786, content: "[K"}
    , { time: 32817, content: "[K"}
    , { time: 32847, content: "[K"}
    , { time: 32878, content: ""}
    , { time: 32908, content: ""}
    , { time: 32940, content: ""}
    , { time: 32971, content: ""}
    , { time: 33284, content: "g"}
    , { time: 33741, content: "[K"}
    , { time: 33885, content: "f"}
    , { time: 34099, content: "i"}
    , { time: 34534, content: "g"}
    , { time: 34666, content: "l"}
    , { time: 34805, content: "e"}
    , { time: 34983, content: "t"}
    , { time: 35403, content: " "}
    , { time: 37153, content: "r"}
    , { time: 37213, content: "o"}
    , { time: 37396, content: "c"}
    , { time: 37514, content: "k"}
    , { time: 37625, content: "s"}
    , { time: 37941, content: "\r\n]2;crisboot@crisboot-Aspire-S3-391  figlet rocks"}
    , { time: 37945, content: "                _        \r\n _ __ ___   ___| | _____ \r\n| '__/ _ \\ / __| |/ / __|\r\n"}
    , { time: 37945, content: "| | | (_) | (__|   <\\__ \\\r\n|_|  \\___/ \\___|_|\\_\\___/\r\n                         \r\n"}
    , { time: 37947, content: "]2;crisboot@crisboot-Aspire-S3-391  ~/"}
    , { time: 37960, content: "[m  [34mcrisboot[32m@crisboot-Aspire-S3-391 [m[1m[36m~$ [m"}
    , { time: 40053, content: "o"}
    , { time: 40181, content: "p"}
    , { time: 40248, content: "e"}
    , { time: 40421, content: "n"}
    , { time: 40535, content: " "}
    , { time: 40666, content: "v"}
    , { time: 40766, content: "i"}
    , { time: 40835, content: "m"}
    , { time: 41402, content: "?"}
    , { time: 41904, content: "[K"}
    , { time: 42405, content: "[K"}
    , { time: 42436, content: "[K"}
    , { time: 42468, content: "[K"}
    , { time: 42499, content: "[K"}
    , { time: 42530, content: "[K"}
    , { time: 42562, content: "[K"}
    , { time: 42592, content: "[K"}
    , { time: 42623, content: "[K"}
    , { time: 42653, content: ""}
    , { time: 42683, content: ""}
    , { time: 42714, content: ""}
    , { time: 42744, content: ""}
    , { time: 42789, content: "v"}
    , { time: 43067, content: "i"}
    , { time: 43177, content: "m"}
    , { time: 43612, content: "\r\n]2;crisboot@crisboot-Aspire-S3-391  vim"}
    , { time: 43697, content: "7[?47h[?1h="}
    , { time: 43698, content: "[1;24r[m[H[2J[>c"}
    , { time: 43700, content: "[1;1H[33m  1 [m[4m                                                                            [m[2;1H[1m[34m~                                                                               [3;1H~                                                                               [4;1H~                                                                               [5;1H~                                                                               [6;1H~                                                                               [7;1H~                                                                               [8;1H~                                                                               [9;1H~                                                                               [10;1H~                                                                               [11;1H~                                                                               [12;1H~                                                                               [13;1H~                                                                               [14;1H~                                                                               [15;1H~                                                                               [16;1H~                                                                               [17;1H~                                                                               [18;1H~                                                                               [19;1H~                                                                               [20;1H~                                                                               [21;1H~                                                                               [22;1H~                                                                               [23;1H~                                                                               [m[24;63H0,0-1"}
    , { time: 43700, content: "[9CAll[6;32HVIM - Vi IMproved[8;33Hversion 7.3.547[9;29Hby Bram Moolenaar et al.[10;13HModified by pkg-vim-maintainers@lists.alioth.debian.org[11;19HVim is open source and freely distributable[13;26HBecome a registered Vim user![14;18Htype  :help register[34m<Enter>[m   for information [16;18Htype  :q[34m<Enter>[m               to exit         [17;18Htype  :help[34m<Enter>[m  or  [34m<F1>[m  for on-line help[18;18Htype  :help version7[34m<Enter>[m   for version info[1;5H"}
    , { time: 45436, content: "[24;63H[K[24;1H:"}
    , { time: 45941, content: "."}
    , { time: 46270, content: "!"}
    , { time: 46977, content: "f"}
    , { time: 47095, content: "i"}
    , { time: 47251, content: "g"}
    , { time: 47422, content: "l"}
    , { time: 47581, content: "e"}
    , { time: 47677, content: "t"}
    , { time: 48277, content: " "}
    , { time: 48428, content: "t"}
    , { time: 48553, content: "e"}
    , { time: 48662, content: "r"}
    , { time: 48762, content: "m"}
    , { time: 48914, content: "i"}
    , { time: 49057, content: "n"}
    , { time: 49253, content: "a"}
    , { time: 49395, content: "l"}
    , { time: 49741, content: "\r"}
    , { time: 49795, content: "[1;5H[4m _[21C _[12C _[m\r\n[33m  2 [m| |_ ___ _ __ _ __ ___ (_)_ __   __ _| |[2;45H[K[3;1H[33m  3 [m| __/ _ \\ '__| '_ ` _ \\| | '_ \\ / _` | |[3;45H[K[4;1H[33m  4 [m| ||  __/ |  | | | | | | | | | | (_| | |[4;45H[K[5;1H[33m  5 [m \\__\\___|_|  |_| |_| |_|_|_| |_|\\__,_|_|[5;45H[K[6;1H[33m  6 [m                                        [6;45H[K[8;33H[1m[34m               [9;29H                        [10;13H                                                       [11;19H                                           [13;26H                             [14;18H                                              [16;18H                                              [17;18H                                              [18;18H                                              [m[24;63H1,2[11CAll[1;6H"}
    , { time: 54197, content: " _                      _             _ [1;45H[K[2;5H[4m| |_ ___ _ __ _ __ ___ (_)_ __   __ _| |                                    [m[24;63H2[2;6H"}
    , { time: 54498, content: "| |_ ___ _ __ _ __ ___ (_)_ __   __ _| |[2;45H[K[3;5H[4m| __/ _ \\ '__| '_ ` _ \\| | '_ \\ / _` | |                                    [m[24;63H3[3;6H"}
    , { time: 54660, content: "| __/ _ \\ '__| '_ ` _ \\| | '_ \\ / _` | |[3;45H[K[4;5H[4m| ||  __/ |  | | | | | | | | | | (_| | |                                    [m[24;63H4[4;6H"}
    , { time: 54774, content: "| ||  __/ |  | | | | | | | | | | (_| | |[4;45H[K[5;5H[4m \\__\\___|_|  |_| |_| |_|_|_| |_|\\__,_|_|                                    [m[24;63H5[5;6H"}
    , { time: 54919, content: " \\__\\___|_|  |_| |_| |_|_|_| |_|\\__,_|_|[5;45H[K[6;5H[4m                                                                            [m[24;63H6[6;6H"}
    , { time: 55070, content: ""}
    , { time: 56978, content: "[24;1H[K[24;1H:"}
    , { time: 59286, content: "."}
    , { time: 59466, content: "!"}
    , { time: 60193, content: "f"}
    , { time: 60316, content: "i"}
    , { time: 60481, content: "g"}
    , { time: 60651, content: "l"}
    , { time: 60943, content: "e"}
    , { time: 61077, content: "t"}
    , { time: 61296, content: " "}
    , { time: 61845, content: "r"}
    , { time: 61922, content: "e"}
    , { time: 62151, content: "c"}
    , { time: 62270, content: "o"}
    , { time: 62439, content: "r"}
    , { time: 62674, content: "d"}
    , { time: 62743, content: "e"}
    , { time: 62882, content: "r"}
    , { time: 63778, content: "\r"}
    , { time: 63839, content: "[6;32H[4m _[m\r\n[33m  7 [m _ __ ___  ___ ___  _ __ __| | ___ _ __ [7;45H[K[8;1H[33m  8 [m| '__/ _ \\/ __/ _ \\| '__/ _` |/ _ \\ '__|[8;45H[K[9;1H[33m  9 [m| | |  __/ (_| (_) | | | (_| |  __/ |   [9;45H[K[10;1H[33m 10 [m|_|  \\___|\\___\\___/|_|  \\__,_|\\___|_|   [10;45H[K[11;1H[33m 11 [m                                        [11;45H[K[24;63H6,29[10CAll[6;33H"}
    , { time: 65680, content: "[24;1H[K[24;1H:"}
    , { time: 66698, content: "w"}
    , { time: 67344, content: "[24;2H[K[24;2H"}
    , { time: 67457, content: "q"}
    , { time: 67768, content: "!"}
    , { time: 68052, content: "\r[24;1H[K[24;1H[?1l>[2J[?47l8"}
    , { time: 68053, content: "]2;crisboot@crisboot-Aspire-S3-391  ~/"}
    , { time: 68065, content: "[m  [34mcrisboot[32m@crisboot-Aspire-S3-391 [m[1m[36m~$ [m"}
    , { time: 68792, content: "i"}
    , { time: 68869, content: "t"}
    , { time: 69367, content: "'"}
    , { time: 69486, content: "s"}
    , { time: 69653, content: " "}
    , { time: 70069, content: "j"}
    , { time: 70268, content: "u"}
    , { time: 70378, content: "s"}
    , { time: 70509, content: "t"}
    , { time: 70690, content: " "}
    , { time: 71106, content: "a"}
    , { time: 71342, content: "w"}
    , { time: 71547, content: "e"}
    , { time: 71808, content: "s"}
    , { time: 71911, content: "o"}
    , { time: 72061, content: "m"}
    , { time: 72216, content: "e"}
    , { time: 72417, content: " "}
    , { time: 73276, content: "m"}
    , { time: 73450, content: "a"}
    , { time: 73601, content: "a"}
    , { time: 73743, content: "a"}
    , { time: 73925, content: "m"}
    , { time: 74093, content: "m"}
    , { time: 74234, content: "m"}
    , { time: 74369, content: "m"}
    , { time: 74505, content: "m"}
    , { time: 74667, content: "m"}
    , { time: 75179, content: " "}
    , { time: 75997, content: "[K"}
    , { time: 76196, content: "a"}
    , { time: 76398, content: "a"}
    , { time: 76550, content: "a"}
    , { time: 76620, content: " "}
    , { time: 76796, content: "m"}
    , { time: 77016, content: "a"}
    , { time: 77196, content: "a"}
    , { time: 77340, content: "a"}
    , { time: 77668, content: "[K"}
    , { time: 77810, content: "[K"}
    , { time: 78209, content: "[K"}
    , { time: 78450, content: "i"}
    , { time: 78596, content: "a"}
    , { time: 78772, content: "a"}
    , { time: 78936, content: "a"}
    , { time: 79070, content: "a"}
    , { time: 79305, content: "[K"}
    , { time: 79805, content: "[K"}
    , { time: 79835, content: "[K"}
    , { time: 79868, content: "[K"}
    , { time: 79899, content: "[K"}
    , { time: 79930, content: "[K"}
    , { time: 79960, content: "[K"}
    , { time: 79992, content: "[K"}
    , { time: 80023, content: "[K"}
    , { time: 80052, content: "[K"}
    , { time: 80083, content: "[K"}
    , { time: 80114, content: "[K"}
    , { time: 80145, content: "[K"}
    , { time: 80176, content: "[K"}
    , { time: 80206, content: "[K"}
    , { time: 80238, content: "[K"}
    , { time: 80269, content: "[K"}
    , { time: 80298, content: "[K"}
    , { time: 80330, content: "[K"}
    , { time: 80361, content: "[K"}
    , { time: 80391, content: "[K"}
    , { time: 80960, content: "[K"}
    , { time: 81462, content: "[K"}
    , { time: 81493, content: "[K"}
    , { time: 81524, content: "[K"}
    , { time: 81555, content: "[K"}
    , { time: 81586, content: "[K"}
    , { time: 81617, content: "[K"}
    , { time: 81649, content: "[K"}
    , { time: 81679, content: "[K"}
    , { time: 81710, content: "[K"}
    , { time: 81741, content: "[K"}
    , { time: 81772, content: "[K"}
    , { time: 81803, content: "[K"}
    , { time: 81837, content: "[K"}
    , { time: 81865, content: "[K"}
    , { time: 81895, content: "[K"}
    , { time: 81925, content: "[K"}
    , { time: 81956, content: ""}
    , { time: 81986, content: ""}
    , { time: 82017, content: ""}
    , { time: 82906, content: "[H[2J[m  [34mcrisboot[32m@crisboot-Aspire-S3-391 [m[1m[36m~$ [m"}
    , { time: 83460, content: "w"}
    , { time: 83515, content: "w"}
    , { time: 83536, content: "h"}
    , { time: 84065, content: "[K"}
    , { time: 84501, content: "[K"}
    , { time: 84739, content: "h"}
    , { time: 84809, content: "a"}
    , { time: 84903, content: "t"}
    , { time: 85019, content: " "}
    , { time: 85259, content: "e"}
    , { time: 85325, content: "l"}
    , { time: 85498, content: "s"}
    , { time: 85586, content: "e"}
    , { time: 85898, content: " "}
    , { time: 86153, content: "w"}
    , { time: 86374, content: "e"}
    , { time: 86479, content: " "}
    , { time: 86632, content: "c"}
    , { time: 86720, content: "a"}
    , { time: 86801, content: "n"}
    , { time: 86911, content: " "}
    , { time: 87032, content: "d"}
    , { time: 87198, content: "o"}
    , { time: 87593, content: "?"}
    , { time: 88895, content: "[K"}
    , { time: 89395, content: "[K"}
    , { time: 89426, content: "[K"}
    , { time: 89457, content: "[K"}
    , { time: 89488, content: "[K"}
    , { time: 89518, content: "[K"}
    , { time: 89550, content: "[K"}
    , { time: 89581, content: "[K"}
    , { time: 89612, content: "[K"}
    , { time: 89643, content: "[K"}
    , { time: 89674, content: "[K"}
    , { time: 89706, content: "[K"}
    , { time: 89736, content: "[K"}
    , { time: 89768, content: "[K"}
    , { time: 89798, content: "[K"}
    , { time: 89828, content: "[K"}
    , { time: 89859, content: "[K"}
    , { time: 89889, content: "[K"}
    , { time: 89920, content: "[K"}
    , { time: 89951, content: "[K"}
    , { time: 89982, content: ""}
    , { time: 90013, content: ""}
    , { time: 90043, content: ""}
    , { time: 90377, content: "p"}
    , { time: 91144, content: "[K"}
    , { time: 91357, content: "s"}
    , { time: 91614, content: "e"}
    , { time: 91780, content: "e"}
    , { time: 91920, content: " "}
    , { time: 92161, content: "h"}
    , { time: 92260, content: "t"}
    , { time: 92936, content: "o"}
    , { time: 93377, content: "p"}
    , { time: 93651, content: " "}
    , { time: 93826, content: "o"}
    , { time: 93956, content: "r"}
    , { time: 94090, content: " "}
    , { time: 94314, content: "v"}
    , { time: 94825, content: "t"}
    , { time: 95283, content: "o"}
    , { time: 95402, content: "p"}
    , { time: 96198, content: "[K"}
    , { time: 96699, content: "[K"}
    , { time: 96730, content: "[K"}
    , { time: 96762, content: "[K"}
    , { time: 96794, content: "[K"}
    , { time: 96824, content: "[K"}
    , { time: 96853, content: "[K"}
    , { time: 96884, content: "[K"}
    , { time: 96916, content: "[K"}
    , { time: 96949, content: "[K"}
    , { time: 96979, content: "[K"}
    , { time: 97009, content: "[K"}
    , { time: 97040, content: "[K"}
    , { time: 97071, content: "[K"}
    , { time: 97102, content: "[K"}
    , { time: 97133, content: "[K"}
    , { time: 97164, content: ""}
    , { time: 97194, content: ""}
    , { time: 97226, content: ""}
    , { time: 97257, content: ""}
    , { time: 97287, content: ""}
    , { time: 97645, content: "h"}
    , { time: 97775, content: "t"}
    , { time: 97891, content: "o"}
    , { time: 98022, content: "p"}
    , { time: 98461, content: "\r\n]2;crisboot@crisboot-Aspire-S3-391  htop"}
    , { time: 98464, content: ")07[?47h[1;24r[m[4l[?1h="}
    , { time: 98464, content: "[m[?1000h"}
    , { time: 98639, content: "[m[m[H[2J[1B  [36m1  [m[1m[[m[32m|||[31m|||[30m[1m                   14.3%[m][m     [36mTasks: [1m169[m[36m, [1m548[m[36m thr; [32m[1m1[m[36m running[3;3H2  [m[1m[[m[32m|||[30m[1m                       7.1%[m][m     [36mLoad average: [30m[1m0.44 [m[m0.42 [1m0.41 [4;3H[m[36m3  [m[1m[[m[32m|||[30m[1m                       7.1%[m][m     [36mUptime: [1m08:09:56[5;3H[m[36m4  [m[1m[[m[32m|||||||[31m|||||||||[30m[1m         50.0%[m][6;3H[m[36mMem[m[1m[[m[32m|||||||||||||||||[34m|[33m|2070/3771M[30m[1mB[m][7;3H[m[36mSwp[m[1m[[m[31m||||||[30m[1m              344/2047MB[m]\r[2B[m[30m[42m  PID USER      PRI [30m[46m NI [30m[42m VIRT   RES   SHR S CPU% MEM%   TIME+  Command          [10;1H[30m[46m 2614 crisboot   -6 -11  421M  4600  2908 S  0.0  0.1  1:03.89 /usr/bin/pulseaud[11;2H[m[m2619 crisboot   -6 [31m-11 [36m 421M  4[m[m600 [36m 2[m[m908 S  0.0  0.1  0:00.00 /usr/bin/pulseaud[12;2H2607 crisboot    9 [31m-11 [36m 421M  4[m[m600 [36m 2[m[m908 S  7.1  0.1  2:04.24 /usr/bin/pulseaud[13;5H1 [30m[1mroot      [m[m 20   0 [36m27[m[m060 [36m 2[m[m396 [36m 1[m[m204 S  0.0  0.1  0:01.43 /sbin/init[14;3H402 [30m[1mroot      [m[m 20   0 [36m15[m[m272   472   368 S  0.0  0.0  0:00.06 upstart-file-brid[15;3H431 [30m[1mroot      [m[m 20   0 [36m17[m[m320   668   516 S  0.0  0.0  0:00.18 upstart-udev-brid[16;3H433 [30m[1mroot      [m[m 20   0 [36m22[m[m272 [36m 1[m[m000   752 S  0.0  0.0  0:00.20 /sbin/udevd --dae[17;3H801 [30m[1mroot      [m[m 20   0 [36m15[m[m260   468   368 S  0.0  0.0  0:00.03 upstart-socket-br[18;2H1211 [30m[1mroot      [m[m 20   0 [36m52[m[m256   972   968 S  0.0  0.0  0:00.00 /usr/sbin/sshd -D[19;2H1219 [30m[1mmessagebu [m[m 20   0 [36m24[m[m980 [36m 2[m[m036   940 S  0.0  0.1  0:03.46 dbus-daemon --sys[20;2H1228 [30m[1msyslog    [m[m 20   0 [36m 241M  1[m[m076   844 S  0.0  0.0  0:00.96 rsyslogd -c5\r[1B 1229 [30m[1msyslog    [m[m 20 "}
    , { time: 98639, content: "  0 [36m 241M  1[m[m076   844 S  0.0  0.0  0:00.26 rsyslogd -c5\r[1B 1230 [30m[1msyslog    [m[m 20   0 [36m 241M  1[m[m076   844 S  0.0  0.0  0:00.08 rsyslogd -c5\r[1B 1227 [30m[1msyslog    [m[m 20   0 [36m 241M  1[m[m076   844 S  0.0  0.0  0:02.99 rsyslogd -c5\r[1BF1[30m[46mHelp  [m[mF2[30m[46mSetup [m[mF3[30m[46mSearch[m[mF4[30m[46mFilter[m[mF5[30m[46mTree  [m[mF6[30m[46mSortBy[m[mF7[30m[46mNice -[m[mF8[30m[46mNice +[m[mF9[30m[46mKill  [m[mF10[30m[46mQuit [4ht[4l[H[m[m"}
    , { time: 100174, content: "[2;7H[34m|[32m||[31m|[30m[1m  [2;32H 8.8[2;64H[32m2[3;9H[m[31m|[3;33H[30m[1m6.6[4;10H[m[31m|[4;32H[30m[1m10.7[4;58H[36m8[5;10H[m[31m||[30m[1m           [5;32H10.7[6;28H[m[33m69[10;46H[30m[46m2.7[10;61H92[12;43H[m[32mR [m[m 5.3[12;61H32[H"}
    , { time: 100818, content: "[23B[J[?1000l[24;1H[2J[?47l8\r[?1l>"}
    , { time: 100820, content: "]2;crisboot@crisboot-Aspire-S3-391  ~/"}
    , { time: 100833, content: "[m  [34mcrisboot[32m@crisboot-Aspire-S3-391 [m[1m[36m~$ [m"}
    , { time: 101811, content: "v"}
    , { time: 102081, content: "t"}
    , { time: 102192, content: "o"}
    , { time: 102297, content: "p"}
    , { time: 102955, content: "\r\n]2;crisboot@crisboot-Aspire-S3-391  vtop"}
    , { time: 103130, content: "[?1049h[?25l[1;1H[H[2J7[1;1H[38;5;135m [m[1;38;5;135mvtop[m[37m for crisboot-Aspire-S3-391 [38C[m05:14:568[?1000h[?1003h[?1005h7[2;1H[38;5;43m(0lqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqk[m[3;1H[38;5;43mx[m[38;5;135m(B                                                                              [m[38;5;43m(0x[m[4;1H[38;5;43mx[m[38;5;135m(B                                                                              [m[38;5;43m(0x[m[5;1H[38;5;43mx[m[38;5;135m(B                                                                              [m[38;5;43m(0x[m[6;1H[38;5;43mx[m[38;5;135m(B                                                                              [m[38;5;43m(0x[m[7;1H[38;5;43mx[m[38;5;135m(B                                                                              [m[38;5;43m(0x[m[8;1H[38;5;43mx[m[38;5;135m(B                                                                              [m[38;5;43m(0x[m[9;1H[38;5;43mx[m[38;5;135m(B                                                                              [m[38;5;43m(0x[m[10;1H[38;5;43mx[m[38;5;135m(B                                                                              [m[38;5;43m(0x[m[11;1H[38;5;43mx[m[38;5;135m(B                                                                              [m[38;5;43m(0x[m[12;1H[38;5;43mx[m[38;5;135m(B                                                                              [m[38;5;43m(0x[m[13;1H[38;5;43mmqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqj[m[14;1H[38;5;43mlqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqklqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqk[m[15;1H[38;5;43mx[m[38;5;135m(B                                      [m[38;5;43m(0xx[38Cx[m[16;1H[38;5;43mx[m[38;5;135m(B                                      [m[38;5;43m(0xx[38Cx[m[17;1H[38;5;43mx[m[38;5;135m(B                                      [m[38;5;43m(0xx[38Cx[m[18;1H[38;5;43mx[m[38;5;135m(B                                      [m[38;5;43m(0xx[38Cx[m[19;1H[38;5;43mx[m[38;5;135m(B                                      [m[38;5;43m(0xx[38Cx[m[20;1H[38;5;43mx[m[38;5;135m(B                                      [m[38;5;43m(0xx[38Cx[m[21;1H[38;5;43mx[m[38;5;135m(B                                      [m[38;5;43m(0xx[38Cx[m[22;1H[38;5;43mx[m[38;5;135m(B                                      [m[38;5;43m(0xx[38Cx[m[23;1H[38;5;43mmqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqjmqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqj[m[24;1H[41C[47;30m(Bm[1C[mSort[1Cby[1CMem[4Chttp://parall.ax/vtop8"}
    , { time: 103320, content: "7[2;1H[2C CPU Usage [14;1H[14;3H Memory Usage [26C Process List [15;1H[15;35H[37m 93%[3C[m[1m Command         CPU % Count Memory %[m[16;1H[16;43H[48;5;135m chrome          6.1   31    57.2   [m[17;1H[17;44HXorg[12C0.9[3C1[5C1.1[18;1H[18;44Hcompiz[10C0.8[3C1[5C1.4[19;1H[19;44Hmongod[10C0.3[3C1[5C0.1[20;1H[20;44Hgnome-terminal[2C0.2[3C1[5C0.6[21;1H[21;44Hnode[12C0.2[3C2[5C0.9[22;1H[22;44Hrts5139-polling[1C0.1[3C1[5C0.08"}
    , { time: 103367, content: "7[1;1H[78C78"}
    , { time: 103463, content: "7[16;1H[16;38H[38;5;135m⢸[m[17;1H[17;38H[38;5;135m⢸[m[18;1H[18;38H[38;5;135m⢸[m[19;1H[19;38H[38;5;135m⢸[m[20;1H[20;38H[38;5;135m⢸[m[21;1H[21;38H[38;5;135m⢸[m[22;1H[22;38H[38;5;135m⢸[m8"}
    , { time: 103636, content: "7[16;1H[16;38H[38;5;135m⣿[m[17;1H[17;38H[38;5;135m⣿[m[18;1H[18;38H[38;5;135m⣿[m[19;1H[19;38H[38;5;135m⣿[m[20;1H[20;38H[38;5;135m⣿[m[21;1H[21;38H[38;5;135m⣿[m[22;1H[22;38H[38;5;135m⣿[m8"}
    , { time: 103810, content: "7[16;1H[16;37H[38;5;135m⢸[m[17;1H[17;37H[38;5;135m⢸[m[18;1H[18;37H[38;5;135m⢸[m[19;1H[19;37H[38;5;135m⢸[m[20;1H[20;37H[38;5;135m⢸[m[21;1H[21;37H[38;5;135m⢸[m[22;1H[22;37H[38;5;135m⢸[m8"}
    , { time: 103952, content: "7[16;1H[16;37H[38;5;135m⣿[m[17;1H[17;37H[38;5;135m⣿[m[18;1H[18;37H[38;5;135m⣿[m[19;1H[19;37H[38;5;135m⣿[m[20;1H[20;37H[38;5;135m⣿[m[21;1H[21;37H[38;5;135m⣿[m[22;1H[22;37H[38;5;135m⣿[m8"}
    , { time: 104087, content: "7[16;1H[16;36H[38;5;135m⢸[m[17;1H[17;36H[38;5;135m⢸[m[18;1H[18;36H[38;5;135m⢸[m[19;1H[19;36H[38;5;135m⢸[m[20;1H[20;36H[38;5;135m⢸[m[21;1H[21;36H[38;5;135m⢸[m[22;1H[22;36H[38;5;135m⢸[m8"}
    , { time: 104232, content: "7[3;1H[3;75H[37m 22%[m[16;1H[16;36H[38;5;135m⣿[m[17;1H[17;36H[38;5;135m⣿[m[18;1H[18;36H[38;5;135m⣿[m[19;1H[19;36H[38;5;135m⣿[m[20;1H[20;36H[38;5;135m⣿[m[21;1H[21;36H[38;5;135m⣿[m[22;1H[22;36H[38;5;135m⣿[m8"}
    , { time: 104360, content: "7[10;1H[10;78H[38;5;135m⢠[m[11;1H[11;78H[38;5;135m⢸[m[12;1H[12;78H[38;5;135m⢸[m[16;1H[16;35H[38;5;135m⢸[m[17;1H[17;35H[38;5;135m⢸[m[18;1H[18;35H[38;5;135m⢸[m[19;1H[19;35H[38;5;135m⢸[m[20;1H[20;35H[38;5;135m⢸[m[21;1H[21;35H[38;5;135m⢸[m[22;1H[22;35H[38;5;135m⢸[m8"}
    , { time: 104401, content: "7[1;1H[78C88"}
    , { time: 104482, content: "7[3;1H[3;76H[37m15[m[10;1H[10;78H[38;5;135m⣤[m[11;1H[11;78H[38;5;135m⣿[m[12;1H[12;78H[38;5;135m⣿[m[16;1H[16;35H[38;5;135m⣿[m[17;1H[17;35H[38;5;135m⣿[m[18;1H[18;35H[38;5;135m⣿[m[19;1H[19;35H[38;5;135m⣿[m[20;1H[20;35H[38;5;135m⣿[m[21;1H[21;35H[38;5;135m⣿[m[22;1H[22;35H[38;5;135m⣿[m8"}
    , { time: 104620, content: "7[10;1H[10;77H[38;5;135m⢠⡄[m[11;1H[11;77H[38;5;135m⢸⣷[m[12;1H[12;77H[38;5;135m⢸[m[15;1H[15;34H[38;5;135m⢰[m[16;1H[16;34H[38;5;135m⢸[m[17;1H[17;34H[38;5;135m⢸[m[18;1H[18;34H[38;5;135m⢸[m[19;1H[19;34H[38;5;135m⢸[m[20;1H[20;34H[38;5;135m⢸[m[21;1H[21;34H[38;5;135m⢸[m[22;1H[22;34H[38;5;135m⢸[m8"}
    , { time: 104741, content: "7[3;1H[3;77H[37m6[m[10;1H[10;77H[38;5;135m⣤ [m[11;1H[11;77H[38;5;135m⣿⣶[m[12;1H[12;77H[38;5;135m⣿[m[15;1H[15;34H[38;5;135m⣶[m[16;1H[16;34H[38;5;135m⣿[m[17;1H[17;34H[38;5;135m⣿[m[18;1H[18;34H[38;5;135m⣿[m[19;1H[19;34H[38;5;135m⣿[m[20;1H[20;34H[38;5;135m⣿[m[21;1H[21;34H[38;5;135m⣿[m[22;1H[22;34H[38;5;135m⣿[m8"}
    , { time: 104875, content: "7[10;1H[10;76H[38;5;135m⢠⡄[m[11;1H[11;76H[38;5;135m⢸⣷[m[12;1H[12;76H[38;5;135m⢸[m[15;1H[15;33H[38;5;135m⢰[m[16;1H[16;33H[38;5;135m⢸[m[17;1H[17;33H[38;5;135m⢸[m[18;1H[18;33H[38;5;135m⢸[m[19;1H[19;33H[38;5;135m⢸[m[20;1H[20;33H[38;5;135m⢸[m[21;1H[21;33H[38;5;135m⢸[m[22;1H[22;33H[38;5;135m⢸[m8"}
    , { time: 104993, content: "7[10;1H[10;76H[38;5;135m⣤ [m[11;1H[11;76H[38;5;135m⣿⣶[m[12;1H[12;76H[38;5;135m⣿[m[15;1H[15;33H[38;5;135m⣶[m[16;1H[16;33H[38;5;135m⣿[m[17;1H[17;33H[38;5;135m⣿[m[18;1H[18;33H[38;5;135m⣿[m[19;1H[19;33H[38;5;135m⣿[m[20;1H[20;33H[38;5;135m⣿[m[21;1H[21;33H[38;5;135m⣿[m[22;1H[22;33H[38;5;135m⣿[m8"}
    , { time: 105113, content: "7[3;1H[3;77H[37m5[m[10;1H[10;75H[38;5;135m⢠⡄[m[11;1H[11;75H[38;5;135m⢸⣷[m[12;1H[12;75H[38;5;135m⢸[m[15;1H[15;32H[38;5;135m⢰[m[16;1H[16;32H[38;5;135m⢸[m[17;1H[17;32H[38;5;135m⢸[m[18;1H[18;32H[38;5;135m⢸[m[19;1H[19;32H[38;5;135m⢸[m[20;1H[20;32H[38;5;135m⢸[m[21;1H[21;32H[38;5;135m⢸[m[22;1H[22;32H[38;5;135m⢸[m8"}
    , { time: 105235, content: "7[10;1H[10;75H[38;5;135m⣤ [m[11;1H[11;75H[38;5;135m⣿⣶[m[12;1H[12;75H[38;5;135m⣿[m[15;1H[15;32H[38;5;135m⣶[m[16;1H[16;32H[38;5;135m⣿[10C[m node            9.2   2     1.1    [17;1H[17;32H[38;5;135m⣿[10C[m[48;5;135m chrome          6.1   31    57.2   [m[18;1H[18;32H[38;5;135m⣿[11C[mX[1Crg  [12C9[11C1[19;1H[19;32H[38;5;135m⣿[11C[mc[1Cmpiz[12C8[9C1[1C4[20;1H[20;32H[38;5;135m⣿[11C[mmongod        [4C3[11C1[21;1H[21;32H[38;5;135m⣿[11C[mgnome-terminal[8C1[7C6[22;1H[22;32H[38;5;135m⣿[m8"}
    , { time: 105353, content: "7[3;1H[3;77H[37m6[m[10;1H[10;74H[38;5;135m⢠⡄[m[11;1H[11;74H[38;5;135m⢸⣷[m[12;1H[12;74H[38;5;135m⢸[m[15;1H[15;31H[38;5;135m⢰[m[16;1H[16;31H[38;5;135m⢸[m[17;1H[17;31H[38;5;135m⢸[m[18;1H[18;31H[38;5;135m⢸[m[19;1H[19;31H[38;5;135m⢸[m[20;1H[20;31H[38;5;135m⢸[m[21;1H[21;31H[38;5;135m⢸[m[22;1H[22;31H[38;5;135m⢸[m8"}
    , { time: 105424, content: "7[1;1H[78C98"}
    , { time: 105475, content: "7[10;1H[10;74H[38;5;135m⣤ [m[11;1H[11;74H[38;5;135m⣿⣶[m[12;1H[12;74H[38;5;135m⣿[m[15;1H[15;31H[38;5;135m⣶[m[16;1H[16;31H[38;5;135m⣿[m[17;1H[17;31H[38;5;135m⣿[m[18;1H[18;31H[38;5;135m⣿[m[19;1H[19;31H[38;5;135m⣿[m[20;1H[20;31H[38;5;135m⣿[m[21;1H[21;31H[38;5;135m⣿[m[22;1H[22;31H[38;5;135m⣿[m8"}
    , { time: 105593, content: "7[3;1H[3;77H[37m5[m[10;1H[10;73H[38;5;135m⢠⡄[m[11;1H[11;73H[38;5;135m⢸⣷[m[12;1H[12;73H[38;5;135m⢸[m[15;1H[15;30H[38;5;135m⢰[m[16;1H[16;30H[38;5;135m⢸[m[17;1H[17;30H[38;5;135m⢸[m[18;1H[18;30H[38;5;135m⢸[m[19;1H[19;30H[38;5;135m⢸[m[20;1H[20;30H[38;5;135m⢸[m[21;1H[21;30H[38;5;135m⢸[m[22;1H[22;30H[38;5;135m⢸[m8"}
    , { time: 105714, content: "7[3;1H[3;77H[37m4[m[10;1H[10;73H[38;5;135m⣤ [m[11;1H[11;73H[38;5;135m⣿⣶[m[12;1H[12;73H[38;5;135m⣿[m[15;1H[15;30H[38;5;135m⣶[m[16;1H[16;30H[38;5;135m⣿[m[17;1H[17;30H[38;5;135m⣿[m[18;1H[18;30H[38;5;135m⣿[m[19;1H[19;30H[38;5;135m⣿[m[20;1H[20;30H[38;5;135m⣿[m[21;1H[21;30H[38;5;135m⣿[m[22;1H[22;30H[38;5;135m⣿[m8"}
    , { time: 105833, content: "7[10;1H[10;72H[38;5;135m⢠⡄[m[11;1H[11;72H[38;5;135m⢸⣷[4C⣦[m[12;1H[12;72H[38;5;135m⢸[m[15;1H[15;29H[38;5;135m⢰[m[16;1H[16;29H[38;5;135m⢸[m[17;1H[17;29H[38;5;135m⢸[m[18;1H[18;29H[38;5;135m⢸[m[19;1H[19;29H[38;5;135m⢸[m[20;1H[20;29H[38;5;135m⢸[m[21;1H[21;29H[38;5;135m⢸[m[22;1H[22;29H[38;5;135m⢸[m8"}
    , { time: 105956, content: "7[10;1H[10;72H[38;5;135m⣤ [m[11;1H[11;72H[38;5;135m⣿⣶[4C⣤[m[12;1H[12;72H[38;5;135m⣿[m[15;1H[15;29H[38;5;135m⣶[m[16;1H[16;29H[38;5;135m⣿[m[17;1H[17;29H[38;5;135m⣿[m[18;1H[18;29H[38;5;135m⣿[m[19;1H[19;29H[38;5;135m⣿[m[20;1H[20;29H[38;5;135m⣿[m[21;1H[21;29H[38;5;135m⣿[m[22;1H[22;29H[38;5;135m⣿[m8"}
    , { time: 106096, content: "7[10;1H[10;71H[38;5;135m⢠⡄[m[11;1H[11;71H[38;5;135m⢸⣷[4C⣦[m[12;1H[12;71H[38;5;135m⢸[m[15;1H[15;28H[38;5;135m⢰[m[16;1H[16;28H[38;5;135m⢸[m[17;1H[17;28H[38;5;135m⢸[m[18;1H[18;28H[38;5;135m⢸[m[19;1H[19;28H[38;5;135m⢸[m[20;1H[20;28H[38;5;135m⢸[m[21;1H[21;28H[38;5;135m⢸[m[22;1H[22;28H[38;5;135m⢸[m8"}
    , { time: 106098, content: "[H[2J"}
    , { time: 106098, content: "[?12l[?25h"}
    , { time: 106098, content: "[?1049l"}
    , { time: 106099, content: "[?1000l"}
    , { time: 106099, content: "[?1003l"}
    , { time: 106099, content: "[?1005l"}
    , { time: 106103, content: "]2;crisboot@crisboot-Aspire-S3-391  ~/"}
    , { time: 106109, content: "[m  [34mcrisboot[32m@crisboot-Aspire-S3-391 [m[1m[36m~$ [m"}
    , { time: 106986, content: "c"}
    , { time: 107164, content: "o"}
    , { time: 107778, content: "o"}
    , { time: 107970, content: "l"}
    , { time: 108172, content: " "}
    , { time: 108493, content: "h"}
    , { time: 108996, content: "[K"}
    , { time: 109111, content: "a"}
    , { time: 109287, content: "h"}
    , { time: 109763, content: "?"}
    , { time: 111253, content: "[K"}
    , { time: 111753, content: "[K"}
    , { time: 111783, content: "[K"}
    , { time: 111816, content: "[K"}
    , { time: 111847, content: "[K"}
    , { time: 111876, content: "[K"}
    , { time: 111908, content: "[K"}
    , { time: 111939, content: "[K"}
    , { time: 111970, content: ""}
    , { time: 112001, content: ""}
    , { time: 112031, content: ""}
    , { time: 112062, content: ""}
    , { time: 112587, content: "[H[2J[m  [34mcrisboot[32m@crisboot-Aspire-S3-391 [m[1m[36m~$ [m"}
    , { time: 113443, content: "w"}
    , { time: 113663, content: "h"}
    , { time: 113871, content: "y"}
    , { time: 114085, content: " "}
    , { time: 114226, content: "d"}
    , { time: 114303, content: "o"}
    , { time: 114462, content: "n"}
    , { time: 114879, content: "'"}
    , { time: 115064, content: "t"}
    , { time: 115255, content: " "}
    , { time: 115396, content: "w"}
    , { time: 115614, content: "e"}
    , { time: 115733, content: " "}
    , { time: 116087, content: "p"}
    , { time: 116194, content: "l"}
    , { time: 116377, content: "a"}
    , { time: 116803, content: "y"}
    , { time: 116975, content: " "}
    , { time: 117269, content: "n"}
    , { time: 117439, content: "e"}
    , { time: 117568, content: "t"}
    , { time: 117875, content: "c"}
    , { time: 118306, content: "[K"}
    , { time: 118555, content: "h"}
    , { time: 118639, content: "a"}
    , { time: 118792, content: "c"}
    , { time: 118905, content: "k"}
    , { time: 119815, content: "[K"}
    , { time: 120311, content: "[K"}
    , { time: 120341, content: "[K"}
    , { time: 120373, content: "[K"}
    , { time: 120405, content: "[K"}
    , { time: 120435, content: "[K"}
    , { time: 120465, content: "[K"}
    , { time: 120497, content: "[K"}
    , { time: 120528, content: "[K"}
    , { time: 120558, content: "[K"}
    , { time: 120589, content: "[K"}
    , { time: 120620, content: "[K"}
    , { time: 120651, content: "[K"}
    , { time: 120682, content: "[K"}
    , { time: 120712, content: "[K"}
    , { time: 120742, content: "[K"}
    , { time: 120773, content: "[K"}
    , { time: 120804, content: "[K"}
    , { time: 120834, content: "[K"}
    , { time: 120865, content: "[K"}
    , { time: 120896, content: "[K"}
    , { time: 120927, content: "[K"}
    , { time: 120957, content: "[K"}
    , { time: 120988, content: "[K"}
    , { time: 121019, content: "[K"}
    , { time: 121050, content: ""}
    , { time: 121081, content: ""}
    , { time: 121112, content: ""}
    , { time: 121142, content: ""}
    , { time: 121820, content: "n"}
    , { time: 121996, content: "e"}
    , { time: 122078, content: "t"}
    , { time: 122370, content: "h"}
    , { time: 122451, content: "a"}
    , { time: 122592, content: "c"}
    , { time: 122705, content: "k"}
    , { time: 122932, content: " "}
    , { time: 123755, content: "\r\n]2;crisboot@crisboot-Aspire-S3-391  nethack"}
    , { time: 123763, content: "7[?47h)0[H[2J[H[2;1HNetHack, Copyright 1985-2003\r[3;1H         By Stichting Mathematisch Centrum and M. Stephenson.\r[4;1H         See license for details.\r[5;1H[6;1H[7;1HShall I pick a character's race, role, gender and alignment for you? [ynq] "}
    , { time: 125447, content: "n[H[2J[HChoosing Character's Role[1;48H[K Pick a role for your character[2;48H[K [3;48H[K a - an Archeologist[4;48H[K b - a Barbarian[5;48H[K c - a Caveman/Cavewoman[6;48H[K h - a Healer[7;48H[K k - a Knight[8;48H[K m - a Monk[9;48H[K p - a Priest/Priestess[10;48H[K r - a Rogue[11;48H[K R - a Ranger[12;48H[K s - a Samurai[13;48H[K t - a Tourist[14;48H[K v - a Valkyrie[15;48H[K w - a Wizard[16;48H[K * - Random[17;48H[K q - Quit[18;48H[K[C(end) "}
    , { time: 127474, content: "[12;51H+[1;47H[K[2;47H[K[3;47H[K[4;47H[K[5;47H[K[6;47H[K[7;47H[K[8;47H[K[9;47H[K[10;47H[K[11;47H[K[12;47H[K[13;47H[K[14;47H[K[15;47H[K[16;47H[K[17;47H[K[18;47H[K[19;47H[K[H[2J[HChoosing Gender[1;41H[K Pick the gender of your human Samurai[2;41H[K [3;41H[K m - male[4;41H[K f - female[5;41H[K * - Random[6;41H[K q - Quit[7;41H[K[C(end) "}
    , { time: 129423, content: "[3;44H+[1;40H[K[2;40H[K[3;40H[K[4;40H[K[5;40H[K[6;40H[K[7;40H[K[8;40H[K[H[2J[H[H[2J[H[12;17H------[33m+[m--------[13;17H|.............[33m-[m[14;17H|.............|[15;17H|..[1m[37m[7md[m[m..........|[16;17H|...[1m[37m@[m.........|[17;17H---------------[16;21H[23;1HCrisboot the Hatamoto  St:17 Dx:16 Co:18 In:9 Wi:9 Ch:6  Lawful[K\r[24;1HDlvl:1  $:0  HP:[K\rDlvl:1  $:0  HP:15(15)[K\rDlvl:1  $:0  HP:15(15) Pw:2(2) AC:4  Exp:1[K[H[2J[HIt is written in the Book of Amaterasu Omikami:\r[2;1H[3;1H    After the Creation, the cruel god Moloch rebelled\r[4;1H    against the authority of Marduk the Creator.\r[5;1H    Moloch stole from Marduk the most powerful of all\r[6;1H    the artifacts of the gods, the Amulet of Yendor,\r[7;1H    and he hid it in the dark cavities of Gehennom, the\r[8;1H    Under World, where he now lurks, and bides his time.\r[9;1H[10;1HYour goddess Amaterasu Omikami seeks to possess the Amulet, and with it\r[11;1Hto gain deserved ascendance over the other gods.\r[12;1H[13;1HYou, a newly trained Hatamoto, have been heralded\r[14;1Hfrom birth as the instrument of Amaterasu Omikami.  You are destined\r[15;1Hto recover the Amulet for your deity, or die in the\r[16;1Hattempt.  Your hour of destiny has come.  For the sake\r[17;1Hof us all:  Go bravely with Amaterasu Omikami!\r[18;1H[K[C--More--"}
    , { time: 130863, content: "[H[2J[H[12;17H------[33m+[m--------[13;17H|.............[33m-[m[14;17H|.............|[15;17H|..[1m[37m[7md[m[m..........|[16;17H|...[1m[37m@[m.........|[17;17H---------------[16;21H[23;1HCrisboot the Hatamoto  St:17 Dx:16 Co:18 In:9 Wi:9 Ch:6  Lawful[K\r[24;1HDlvl:1  $:0  HP:[K\rDlvl:1  $:0  HP:15(15)[K\rDlvl:1  $:0  HP:15(15) Pw:2(2) AC:4  Exp:1[K[HKonnichi wa crisboot, welcome to NetHack!  You are a lawful male human Samurai.[K[16;21H"}
    , { time: 133946, content: "[H[K[16;20H[1m[37m@[m<"}
    , { time: 135322, content: "[A[HYou displaced Slinky.[K[15;19H[1m[37m[7md[m[m[1m[37m@[m[16;20H.[A"}
    , { time: 135852, content: "[H[K[14;20H[1m[37m@[m[15;19H..[16;19H[1m[37m[7md[m[m[A[A"}
    , { time: 136346, content: "[A[1m[37m@[m[14;20H.[15;18H[1m[37m[7md[m[m[16;19H.[A[A[A"}
    , { time: 137109, content: ".[1m[37m@[m"}
    , { time: 137553, content: "[1m[37m[7md[m[m.[1m[37m@[m[14;19H.[15;18H.[A[A[C[C[C"}
    , { time: 137872, content: ".[C.[1m[37m@[m[14;21H[1m[37m[7md[m[m[A[C"}
    , { time: 139540, content: "[HIn what direction? [K"}
    , { time: 141089, content: "[13;23H[HYou see no door there.[K[13;23H"}
    , { time: 142547, content: "[H[K[13;23H[HIn what direction? [K"}
    , { time: 143001, content: "[13;23H[HYou see no door there.[K[13;23H"}
    , { time: 144000, content: "[H[K[13;23H[HIn what direction? [K"}
    , { time: 144073, content: "[13;23H[HYou see no door there.[K[13;23H"}
    , { time: 145172, content: "[H[K[13;23H[HIn what direction? [K"}
    , { time: 145500, content: "[13;23H[HThe door resists![K[13;23H"}
    , { time: 146913, content: "[H[K[13;23H[HIn what direction? [K"}
    , { time: 148456, content: "[13;23H[HYou see no door there.[K[13;23H"}
    , { time: 149928, content: "[H[K[13;23H[HIn what direction? [K"}
    , { time: 150267, content: "[13;23H[HThe door opens.[K[12;23H[33m|[m[13;21H[1m[37m[7md[m[m[14;20H..[A[C"}
    , { time: 151511, content: "[H[K[12;23H[1m[37m@[m[13;21H.[1m[37m[7md[m[m.[A"}
    , { time: 155157, content: "[HYou don't have anything to drink.[K[12;23H"}
    , { time: 157200, content: "[H[K[12;23H[H# [K"}
    , { time: 158284, content: "quit"}
    , { time: 158411, content: "uit"}
    , { time: 158488, content: "it"}
    , { time: 158589, content: "t"}
    , { time: 159106, content: "[H[K[12;23H[HReally quit? [yn] (n) [K"}
    , { time: 160127, content: "y[K[24;1H[24;17H[K\r[24;17H15(15)[12;23H[HDo you want your possessions identified? [ynq] (n) [K"}
    , { time: 160909, content: "y[K[H[K[1;27H[K [7mWeapons[m[2;27H[K a - a +0 katana (weapon in hand)[3;27H[K b - a +0 wakizashi (alternate weapon; not wielded)[4;27H[K [32mc - a blessed +0 yumi[m[5;27H[K d - 44 +0 ya (in quiver)[6;27H[K [7mArmor[m[7;27H[K [32me - a blessed rustproof +0 splint mail (being worn)[m[8;27H[K[C(end) "}
    , { time: 162900, content: "[1;26H[K[2;26H[K[3;26H[K[4;26H[K[5;26H[K[6;26H[K[7;26H[K[8;26H[K[9;26H[K[12;23H[HDo you want to see your attributes? [ynq] (n) [K"}
    , { time: 163420, content: "n[K[12;23H[HDo you want to see your conduct? [ynq] (n) [K"}
    , { time: 164153, content: "y[K[H[K[1;43H[K Voluntary challenges:[2;43H[K [3;43H[K You went without food.[4;43H[K You were an atheist.[5;43H[K You never hit with a wielded weapon.[6;43H[K You were a pacifist.[7;43H[K You were illiterate.[8;43H[K You never genocided any monsters.[9;43H[K You never polymorphed an object.[10;43H[K You never changed form.[11;43H[K You used no wishes.[12;43H[K[C--More--"}
    , { time: 164961, content: "[1;42H[K[2;42H[K[3;42H[K[4;42H[K[5;42H[K[6;42H[K[7;42H[K[8;42H[K[9;42H[K[10;42H[K[11;42H[K[12;42H[K[24;1H[H[2J[H[24;1H[H[2J[HSayonara crisboot the Samurai...\r[2;1H[3;1HYou quit in The Dungeons of Doom on dungeon level 1 with 0 points,\r[4;1Hand 0 pieces of gold, after 9 moves.\r[5;1HYou were level 1 with a maximum of 15 hit points when you quit.\r[6;1H[24;1H[K--More--"}
    , { time: 166076, content: "[H[2J[H[2;1H No  Points     Name                                                   Hp [max]\r[3;1H  1         68  crisboot-Wiz-Hum-Mal-Neu quit in The Dungeons of Doom\r[4;1H                on level 1.                                            12  [12]\r[5;1H  2         19  crisboot-Sam-Hum-Mal-Law quit in The Dungeons of Doom\r[6;1H                on level 1.                                            15  [15]\r[7;1H[1m             0  crisboot-Sam-Hum-Mal-Law quit in The Dungeons of Doom          [m\r[8;1H[1m                on level 1.                                            15  [15][m[24;1H[K--More--"}
    , { time: 166569, content: "[H[2J[H[2J[?47l8\r\n"}
    , { time: 166571, content: "]2;crisboot@crisboot-Aspire-S3-391  ~/"}
    , { time: 166584, content: "[m  [34mcrisboot[32m@crisboot-Aspire-S3-391 [m[1m[36m~$ [m"}
    , { time: 168175, content: "[H[2J[m  [34mcrisboot[32m@crisboot-Aspire-S3-391 [m[1m[36m~$ [m"}
    , { time: 169220, content: "c"}
    , { time: 169431, content: "r"}
    , { time: 169539, content: "e"}
    , { time: 169987, content: "[K"}
    , { time: 170757, content: "a"}
    , { time: 171030, content: "z"}
    , { time: 171744, content: "y"}
    , { time: 172371, content: "[K"}
    , { time: 172526, content: "[K"}
    , { time: 172667, content: "[K"}
    , { time: 172806, content: "[K"}
    , { time: 172921, content: "[K"}
    , { time: 173484, content: "j"}
    , { time: 173641, content: "u"}
    , { time: 173744, content: "s"}
    , { time: 173866, content: "t"}
    , { time: 174020, content: " "}
    , { time: 174498, content: "f"}
    , { time: 174638, content: "o"}
    , { time: 174856, content: "l"}
    , { time: 174995, content: "l"}
    , { time: 175185, content: "o"}
    , { time: 175322, content: "w"}
    , { time: 175452, content: " "}
    , { time: 175582, content: "m"}
    , { time: 175676, content: "e"}
    , { time: 175813, content: " "}
    , { time: 176375, content: "o"}
    , { time: 176558, content: "n"}
    , { time: 176749, content: " "}
    , { time: 177021, content: "t"}
    , { time: 177248, content: "w"}
    , { time: 177432, content: "i"}
    , { time: 177650, content: "t"}
    , { time: 177818, content: "t"}
    , { time: 178096, content: "e"}
    , { time: 178174, content: "r"}
    , { time: 179378, content: " "}
    , { time: 180229, content: "@"}
    , { time: 180528, content: "c"}
    , { time: 180659, content: "o"}
    , { time: 180773, content: "r"}
    , { time: 180984, content: "t"}
    , { time: 181055, content: "e"}
    , { time: 181359, content: "z"}
    , { time: 181545, content: "c"}
    , { time: 181738, content: "r"}
    , { time: 181861, content: "i"}
    , { time: 181965, content: "s"}
    , { time: 182558, content: "t"}
    , { time: 182691, content: "i"}
    , { time: 182807, content: "a"}
    , { time: 182984, content: "n"}
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
