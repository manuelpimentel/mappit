$(function() {		
    $(".homebutton").click(function(){
        $("#homebutton").attr("src", "/assets/activebutton.png");    
        $("#page2button").attr("src", "/assets/notactivebutton.png");
        $("#page3button").attr("src", "/assets/notactivebutton.png");
        $("#page4button").attr("src", "/assets/notactivebutton.png");
        $("#messagesbutton").attr("src", "/assets/notactivebutton.png");
    });    

    $(".page2button").click(function(){
        $("#homebutton").attr("src", "/assets/notactivebutton.png");    
        $("#page2button").attr("src", "/assets/activebutton.png");
        $("#page3button").attr("src", "/assets/notactivebutton.png");
        $("#page4button").attr("src", "/assets/notactivebutton.png");
        $("#messagesbutton").attr("src", "/assets/notactivebutton.png");
    });

    $(".page3button").click(function(){
        $("#homebutton").attr("src", "/assets/notactivebutton.png");    
        $("#page2button").attr("src", "/assets/notactivebutton.png");
        $("#page3button").attr("src", "/assets/activebutton.png");
        $("#page4button").attr("src", "/assets/notactivebutton.png");
        $("#messagesbutton").attr("src", "/assets/notactivebutton.png");
    });

    $(".page4button").click(function(){
        $("#homebutton").attr("src", "/assets/notactivebutton.png");    
        $("#page2button").attr("src", "/assets/notactivebutton.png");
        $("#page3button").attr("src", "/assets/notactivebutton.png");
        $("#page4button").attr("src", "/assets/activebutton.png");
        $("#messagesbutton").attr("src", "/assets/notactivebutton.png");
    });

    $(".messagesbutton").click(function(){
        $("#homebutton").attr("src", "/assets/notactivebutton.png");    
        $("#page2button").attr("src", "/assets/notactivebutton.png");
        $("#page3button").attr("src", "/assets/notactivebutton.png");
        $("#page4button").attr("src", "/assets/notactivebutton.png");
        $("#messagesbutton").attr("src", "/assets/activebutton.png");
    });

});





/*    $(".start-page").hide().fadeIn(500);
    $(".about-us").hide().delay(1000).fadeIn(400);
    $(".partners").hide().fadeIn(1000);    
    $(".contact").hide().fadeIn(1000);



    $(".start-page").ready(function(){
        $(".iphonehome").delay(700).animate({top: '55px'},1000);   
        $(".mappitlogo").hide().slideDown(800);
        $(".p").delay(1000).hide().slideDown(1000);
        $(".container").hide().delay(1600).slideDown(1000);
    });





    $(".about-us").ready(function(){
        $(".photo1").hide().show(100);
        $(".photo2").hide().delay(500).show(100);
        $(".photo3").hide().delay(1000).show(100);
        $(".photo4").hide().delay(1500).show(100);
        $(".iphone2").delay(700).animate({left: '50px'},1000);
        $(".iphone21").animate({left: '440px'},1000);
        $(".copycontainer").delay(100).hide().slideDown(1000);
    });

	

    $(".partners").ready(function(){
    	$(".icons").hide().slideDown(1000);
    	$(".message3").delay(500).hide().show(1000);
    	$(".iphone3").hide().fadeIn(1000).animate({right: '640px'},{duration: 'slow', queue: false});
    });	
*/ 