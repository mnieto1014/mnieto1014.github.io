$(document).ready(function() {

  // QUESTION 6
  $("#sidebar-button").click(function(){
    $(".sidebar-container").toggleClass("active");
    setTimeout(function() {
$('body').toggleClass('no-scroll');
}, 300);
    $("#sidebar-button").toggleClass("active");
    $(".page-wrapper").toggleClass("active");

   

  });
  

  // QUESTION 7

    $(".page-wrapper").click(function(){
    $(".sidebar-container").removeClass("active");
    setTimeout(function() {
$('body').removeClass('no-scroll');
}, 300);

    $("#sidebar-button").removeClass("active");
    $(".page-wrapper").removeClass("active");

});

$("#carousel-prev").click(function(){
  left = parseInt($("#carousel").css("margin-left").replace("px",""));
  if (left >=  0) return false
  $("#carousel").css("margin-left", (left+960)+"px");
}) 

$("#carousel-next").click(function(){
  left = parseInt($("#carousel").css("margin-left").replace("px",""));
  if (left <=  -3840) return false
  $("#carousel").css("margin-left", (left-960)+"px");






})





  

  // QUESTION 8

 


  //THIS IS NOT A REQUIRED QUESTION 
  // EXTRA FOR EXPERTS 

  // Implement a "smooth scroll" when the user clicks on the sidebar links here

});