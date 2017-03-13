// Hide and show Flickr Gallery
$(function() {
   $("button").click(function(){
      $("#flickrembed").animate({
        height: 'toggle'
      });
   });
});


//Featurettes button action
document.getElementById("myBtn").addEventListener("click", function(){
    document.getElementById("demo").innerHTML = "Purrrrfect!";
});

document.getElementById("myBtn2").addEventListener("click", function(){
    document.getElementById("demo2").innerHTML = "I look furrrasticly good!";
});


//Pop Up Event Listener, page not created
var x = document.getElementById("popUp");
x.addEventListener("click", myFunction);

function myFunction() {
    alert ("Opps! This page isn't created yet.")
}