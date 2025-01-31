// $(document).ready(function(){  either write this or include the script tags at the end
//     $("h1").css("color", "red");
// });

// $("h1").css("color"); All wala kaam bhi karega

$("h1").addClass("big-title margin-50");
$("h1").text("Yohoooo");

$("button").html("<em>Hey</em>");

$(document).keydown(function(event){
    $("h1").text(event.key);
});

$("h1").on("mouseover", function(){
    $("h1").css("color","purple");
})