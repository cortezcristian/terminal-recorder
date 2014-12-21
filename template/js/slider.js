
$(function() {
  //
  $( "#slider" ).slider({
    range: "min",
    animate: true
  });

  //Tick event
  t.on('tick', function(){
    var pos = parseInt(t.position()/t.length()*100);
    console.log(t.position(), pos);    
    $('#slider').slider({ value: pos });
  });

  $('#slider').on('slidestop', function(event,ui){
    t.position(ui.value/100*t.length());
  });

  $('.ui-icon-play').click(function(){
    if(!t.playing){
        t.play();
    }
  });

  $('.ui-icon-pause').click(function(){
    if(t.playing){
        t.pause();
    }
  });

  $('.ui-icon-stop').click(function(){
    if(t.playing){
        t.pause();
    }
    $('#slider').slider({value:0});
    t.position(0);
  });

});
