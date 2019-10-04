//waits until page is loaded first
$(document).ready(function() {

    $("p").click(function() {
        $(this).children("a").addClass("card-highlight");
    });

   $("#button1").click(function() {
         $(this).next().slideToggle("slow");
        
  });
    
$("img").click(function() {
    $(this).next().children().next("p").slideDown();
})

$(".card").click(function() {
    $(this).toggleClass("card-pink")
})

$("#all_btn").click(function() {
    $(".card").show();
    
})

$("#select_btn").click(function() {
    $(".card:not(.card-pink)").hide();
})


})
