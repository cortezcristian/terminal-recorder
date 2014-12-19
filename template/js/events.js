//Timeline
var timeTotal = 52657+10;

var t = window.t = new Timeline({length: timeTotal, frequency:10 });

var stdouts = [
    { time: 0, content: '  terminal-recorder by @cortezcristian\r\n'}
    , { time: 338, content: "]2;crisboot@crisboot-Aspire-S3-391  ~/"}
    , { time: 343, content: "[m  [34mcrisboot[32m@crisboot-Aspire-S3-391 [m[1m[36m~$ [m"}
    , { time: 1419, content: "[H[2J[m  [34mcrisboot[32m@crisboot-Aspire-S3-391 [m[1m[36m~$ [m"}
    , { time: 3401, content: "f"}
    , { time: 3528, content: "i"}
    , { time: 4106, content: "[K"}
    , { time: 4230, content: "[K"}
    , { time: 5409, content: "n"}
    , { time: 5522, content: "e"}
    , { time: 5593, content: "t"}
    , { time: 5878, content: "h"}
    , { time: 5961, content: "a"}
    , { time: 6135, content: "c"}
    , { time: 6214, content: "k"}
    , { time: 6734, content: "\r\n]2;crisboot@crisboot-Aspire-S3-391  nethack"}
    , { time: 7208, content: "7[?47h)0[H[2J[H[2;1HNetHack, Copyright 1985-2003\r[3;1H         By Stichting Mathematisch Centrum and M. Stephenson.\r[4;1H         See license for details.\r[5;1H"}
    , { time: 7258, content: "[6;1H[7;1HShall I pick a character&#x27;s race, role, gender and alignment for you? [ynq] "}
    , { time: 8677, content: "y"}
    , { time: 8698, content: "[H[2J[H[H[2J[H[18;65H---[1m[37m[7mf[m[m----[19;65H|.[1m[37m@[m....|[20;65H|/.....|[21;65H--------[19;67H"}
    , { time: 8699, content: "[23;1HCrisboot the Stripling      St:18/01 Dx:9 Co:20 In:8 Wi:10 Ch:9  Lawful[K\r[24;1HDlvl:1  $:0  HP:[K\rDlvl:1  $:0  HP:18(18)[K\rDlvl:1  $:0  HP:18(18) Pw:1(1) AC:6  Exp:1[K[1;23H[K It is written in the Book of Tyr:[2;23H[K [3;23H[K     After the Creation, the cruel god Moloch rebelled[4;23H[K     against the authority of Marduk the Creator.[5;23H[K     Moloch stole from Marduk the most powerful of all[6;23H[K     the artifacts of the gods, the Amulet of Yendor,[7;23H[K     and he hid it in the dark cavities of Gehennom, the[8;23H[K     Under World, where he now lurks, and bides his time.[9;23H[K [10;23H[K Your god Tyr seeks to possess the Amulet, and with it[11;23H[K to gain deserved ascendance over the other gods.[12;23H[K [13;23H[K You, a newly trained Stripling, have been heralded[14;23H[K from birth as the instrument of Tyr.  You are destined[15;23H[K to recover the Amulet for your deity, or die in the[16;23H[K attempt.  Your hour of destiny has come.  For the sake[17;23H[K of us all:  Go bravely with Tyr![18;23H[K[C--More--"}
    , { time: 10235, content: "[1;22H[K[2;22H[K[3;22H[K[4;22H[K[5;22H[K[6;22H[K[7;22H[K[8;22H[K[9;22H[K[10;22H[K[11;22H[K[12;22H[K[13;22H[K[14;22H[K[15;22H[K[16;22H[K[17;22H[K[18;22H[K[18;65H---[1m[37m[7mf[m[m----[19;67H[HVelkommen crisboot, welcome to NetHack!  You are a lawful dwarven Valkyrie.[K[19;67H"}
    , { time: 13127, content: "[H[K[19;67H&lt;[20;67H[1m[37m@[m"}
    , { time: 13628, content: "[A[A[C[33m|[m[19;68H[1m[37m[7mf[m[m[20;67H.[1m[37m@[m"}
    , { time: 14258, content: "[A[HYou displaced Rex.[K[19;68H[1m[37m@[m[20;66H[1m[37m[7mf[m[m..[A"}
    , { time: 15295, content: "[H[K[17;68H#[18;68H[1m[37m@[m[19;68H.[A[HRex picks up a wand.[K[19;67H[1m[37m[7mf[m[m[20;66H.[A[A[C"}
    , { time: 15703, content: "[H[K[16;68H#[17;68H[1m[37m@[m[18;68H[33m|[m[19;67H&lt;[1m[37m[7mf[m[m[A[A[HRex drops a wand.[K[18;68H[1m[37m[7mf[m[m[19;68H/[A[A"}
    , { time: 15978, content: "[H[K[15;68H#[16;68H[1m[37m@[m[17;68H[1m[37m[7mf[m[m[18;68H[33m|[m[A[A"}
    , { time: 16176, content: "[A[A#[15;68H[1m[37m@[m[16;68H#[A"}
    , { time: 16351, content: "[A[A#[14;68H[1m[37m@[m[15;68H#[A"}
    , { time: 16523, content: "[A[A#[13;68H[1m[37m@[m[14;68H#[A"}
    , { time: 16684, content: "[A[A#[12;68H[1m[37m@[m[13;68H#[A"}
    , { time: 16846, content: "[A[A#[11;68H[1m[37m@[m[12;68H#[15;68H[1m[37m[7mf[m[m[16;68H#[17;68H#[11;68H"}
    , { time: 16992, content: "[A[A[33m+[m[10;68H[1m[37m@[m[11;68H#[A"}
    , { time: 17491, content: "[HOuch!  You bump into a door.[K[10;68H"}
    , { time: 17675, content: "[H[K[10;68H[HOuch!  You bump into a door.[K[10;68H"}
    , { time: 18961, content: "[H[K[10;68H[HIn what direction? [K"}
    , { time: 19671, content: "[10;68H[HThe door opens.[K[5;66H-----[6;67H.[33m([m.[7;67H...[8;68H.[9;68H[33m|[m[14;68H[1m[37m[7mf[m[m[15;68H#[10;68H"}
    , { time: 20169, content: "[H[K[5;61H-----[5;71H--[6;62H.....[C[C[C..|[7;64H...[C[C[C..|[8;66H..[C..[9;67H-[1m[37m@[m-[10;68H#[13;68H[1m[37m[7mf[m[m[14;68H#[9;68H"}
    , { time: 20483, content: "[5;57H----[6;57H|....[7;57H[33m+[m......[8;57H|........[C[C[1m[37m@[m[C[C.|[9;57H----------[C[33m|[m[C---[11;68H[1m[37m[7mf[m[m[12;68H#[13;68H#[8;68H"}
    , { time: 20723, content: "[A[1m[37m@[m[8;68H.[10;68H[1m[37m[7mf[m[m[11;68H#[7;68H"}
    , { time: 21356, content: ".[8;68H[1m[37m@[m[9;68H[33m|[m[10;68H[1m[37m[7mf[m[m[A[A"}
    , { time: 22199, content: ".[1m[37m@[m[10;68H#[A[A"}
    , { time: 24171, content: "[HYou don&#x27;t have anything to drink.[K[8;69H"}
    , { time: 25496, content: "[H[K[8;69H[HYou don&#x27;t have anything to drink.[K[8;69H"}
    , { time: 26266, content: "[H[K[8;69H[HYou don&#x27;t have anything to drink.[K[8;69H"}
    , { time: 26497, content: "[H[K[8;69H[HYou don&#x27;t have anything to drink.[K[8;69H"}
    , { time: 26876, content: "[H[K[8;69H"}
    , { time: 28070, content: "[HNote: Please use #quit if you wish to exit the game.[K--More--"}
    , { time: 29128, content: "[8;69H[HWhat do you want to ready? [- b or ?*] [K"}
    , { time: 30948, content: "[8;69H[HYou don&#x27;t have that object.[K--More--"}
    , { time: 31636, content: "[8;69H[HWhat do you want to ready? [- b or ?*] [K"}
    , { time: 31990, content: "[8;69H[HNever mind.[K[8;69H"}
    , { time: 33264, content: "[H[K[7;68H[1m[37m@[m[8;69H.[11;68H[1m[37m[7mf[m[m[7;68H"}
    , { time: 34328, content: "[HYou don&#x27;t have anything to drink.[K[7;68H"}
    , { time: 35918, content: "[H[K[7;68H[HNote: Please use #quit if you wish to exit the game.[K--More--"}
    , { time: 40209, content: "[7;68H[HWhat do you want to ready? [- b or ?*] [K"}
    , { time: 41440, content: "[7;68H[HNever mind.[K[7;68H"}
    , { time: 42921, content: "[H[K[7;68H[H# [K"}
    , { time: 43391, content: "quit"}
    , { time: 43755, content: "uit"}
    , { time: 43836, content: "it"}
    , { time: 44067, content: "t"}
    , { time: 44374, content: "[H[K[7;68H[HReally quit? [yn] (n) [K"}
    , { time: 45619, content: "y[K[24;1H[24;17H[K\r[24;17H18(18)[7;68H[HDo you want your possessions identified? [ynq] (n) [K"}
    , { time: 47040, content: "y[K[H[K[1;34H[K [7mWeapons[m[2;34H[K a - a +1 long sword (weapon in hand)[3;34H[K b - a +0 dagger[4;34H[K [7mArmor[m[5;34H[K [1m[33mc - an uncursed +3 small shield (being worn)[m[6;34H[K [7mComestibles[m[7;34H[K [1m[33md - an uncursed food ration[m[8;34H[K[C(end) "}
    , { time: 48351, content: "[1;33H[K[2;33H[K[3;33H[K[4;33H[K[5;33H[K[5;57H----------------[6;33H[K[6;57H|..........[33m([m...|[7;33H[K[7;57H[33m+[m..........[1m[37m@[m...|[8;33H[K[8;57H|..............|[9;33H[K[9;57H-----------[33m|[m----[7;68H[HDo you want to see your attributes? [ynq] (n) [K"}
    , { time: 49189, content: "y[K[H[K[1;52H[K Final Attributes:[2;52H[K [3;52H[K You were nominally aligned.[4;52H[K You were cold resistant.[5;52H[K You had infravision.[6;52H[K You were stealthy.[7;52H[K You survived.[8;52H[K[C--More--"}
    , { time: 50148, content: "[1;51H[K[2;51H[K[3;51H[K[4;51H[K[5;51H[K[5;57H----------------[6;51H[K[6;57H|..........[33m([m...|[7;51H[K[7;57H[33m+[m..........[1m[37m@[m...|[8;51H[K[8;57H|..............|[7;68H[HDo you want to see your conduct? [ynq] (n) [K"}
    , { time: 50987, content: "n[K[24;1H[H[2J[H[24;1H[H[2J[HFarvel crisboot the Valkyrie...\r[2;1H[3;1HYou quit in The Dungeons of Doom on dungeon level 1 with 0 points,\r[4;1Hand 0 pieces of gold, after 20 moves.\r[5;1HYou were level 1 with a maximum of 18 hit points when you quit.\r[6;1H[24;1H[K--More--"}
    , { time: 52157, content: "[H[2J[H[2;1H No  Points     Name                                                   Hp [max]\r[3;1H  1         68  crisboot-Wiz-Hum-Mal-Neu quit in The Dungeons of Doom\r[4;1H                on level 1.                                            12  [12]\r[5;1H  2         19  crisboot-Sam-Hum-Mal-Law quit in The Dungeons of Doom\r[6;1H                on level 1.                                            15  [15]\r[7;1H[1m             0  crisboot-Val-Dwa-Fem-Law quit in The Dungeons of Doom          [m\r[8;1H[1m                on level 1.                                            18  [18][m[24;1H[K--More--"}
    , { time: 52619, content: "[H[2J[H[2J[?47l8\r\n"}
    , { time: 52641, content: "]2;crisboot@crisboot-Aspire-S3-391  ~/"}
    , { time: 52657, content: "[m  [34mcrisboot[32m@crisboot-Aspire-S3-391 [m[1m[36m~$ [m"}
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
