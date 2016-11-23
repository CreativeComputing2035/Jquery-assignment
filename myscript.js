$(document).ready(function(){
    "use strict";            
    $("#btn1").click(function(){
        $(this).text("poof it gone");
        $("h1").toggle();
    });
    $("#btn2").click(function(){
        $("#h3").css("background-color","IndianRed");
    });
    $("#btn3").click(function(){
        $("h2").animate({height:'150px'},2000);
    });
    $("#btn4").click(function(){
        $("#square4").css("background-color","DeepPink").animate({left: '400px'},100);
        $("#squaresDiv").animate({left: $("#test").val()});
    });
});
