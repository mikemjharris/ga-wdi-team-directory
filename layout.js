

var drawCircle = function (offset_angle) {
  
  var list_items = $('li')
  var distanceFromCenter = 200;
  var angle = 2 * Math.PI / 12

  for(var i = 0; i < list_items.length; i++) {
    offset_x = Math.sin( angle * i + offset_angle) * distanceFromCenter + 50
    offset_y = Math.cos(angle * i + offset_angle) * distanceFromCenter - 45
    $(list_items[i]).css("left", offset_x + "px");
    $(list_items[i]).css("top", offset_y + "px");
  }
};

var animateCircle = function(startAngle, chgAngle, time) {
  var fps = 60; 
  drawCircle(startAngle)
  
  if (time > 0) {
    time--
    startAngle = startAngle + chgAngle
    setTimeout(function(){
        animateCircle(startAngle, chgAngle, time)
      }, 1000 / 60 )
    }
  }
    

$('li').hover(function() {
    var student_name = $($(this).children()[0]).html()
    $('#details').html(student_name)  
  } , function() {
    $('#details').html("WDI March 2014")
  })


$('li').on("click" , function() {   
    var startAngle = Math.PI - $('#highlighted').data("angle") * (Math.PI / 6)
    var endAngle =  Math.PI - $(this).data('angle') * (Math.PI / 6)
    console.log(startAngle)
    console.log(endAngle)

    if((startAngle - endAngle) > Math.PI ) {
      startAngle = startAngle - 2 * Math.PI
    } 

    if((startAngle - endAngle) < -Math.PI) {
      startAngle = startAngle + 2 * Math.PI

    }

    console.log(startAngle)
    var fps = 60
    var time_round = 0.5
    var nos_times = time_round * fps
    var chgAngle =  (endAngle - startAngle) / nos_times
    
    $('#highlighted').attr("id", "")
    $(this).attr("id" , "highlighted")

    $('#intro').html("")
    $('#intro').html($($(this).children()[1]).html())
    animateCircle(startAngle, chgAngle , nos_times)
  
});

drawCircle(Math.PI)


 







    