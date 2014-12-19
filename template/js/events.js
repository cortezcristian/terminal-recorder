//Timeline
var timeTotal = 4229+10;

var t = window.t = new Timeline({length: timeTotal, frequency:10 });

var stdouts = [
    { time: 0, content: '     terminal-recorder by @cortezcristian\r\n'}
    , { time: 315, content: "]2;crisboot@crisboot-Aspire-S3-391  ~/"}
    , { time: 323, content: "[m  [34mcrisboot[32m@crisboot-Aspire-S3-391 [m[1m[36m~$ [m"}
    , { time: 713, content: "l"}
    , { time: 825, content: "s"}
    , { time: 1318, content: "[K"}
    , { time: 1484, content: "[K"}
    , { time: 2399, content: "l"}
    , { time: 2507, content: "s"}
    , { time: 2689, content: "s"}
    , { time: 2919, content: "s"}
    , { time: 3086, content: "s"}
    , { time: 3226, content: "s"}
    , { time: 3801, content: "[K"}
    , { time: 3952, content: "[K"}
    , { time: 4093, content: "[K"}
    , { time: 4229, content: "[K"}
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
