$('button').click(function() {
    $('#shutter').addClass('on');
    $('audio')[0].play();
    setTimeout(function() {
      $('#shutter').removeClass('on');
    }, 30*2+45);/* Shutter speed (double & add 45) */
  });


function clickPillAddBorder(){
    var pill = document.getElementById("black");
    console.log("this is the fetched element:", pill); 
    pill.style.backgroundColor = "#ffffff"; 
    pill.style.border = "1px dotted brown"; 
    document.body.style.backgroundColor = "#brown";
}


function clickPillChangeColor(){
  let pill = document.getElementById("blue"); 
  pill.style.backgroundColor = "#aa0423";
  pill.style.width = "50px";
  pill.style.height = "200px";
}

function function2(){
  document.getElementById("firstimage").url(IMG_1748的副本);
}