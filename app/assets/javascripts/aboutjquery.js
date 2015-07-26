$(function() {		
    
    $(".homebutton").click(function(){
        $("#homebutton").attr("src", "/assets/activebutton.png");    
        $("#page2button").attr("src", "/assets/notactivebutton.png");
        $("#page3button").attr("src", "/assets/notactivebutton.png");
        $("#page4button").attr("src", "/assets/notactivebutton.png");
        $("#page5button").attr("src", "/assets/notactivebutton.png");
        $("#messagesbutton").attr("src", "/assets/notactivebutton.png");
    });    

    $(".page2button").click(function(){
        $("#homebutton").attr("src", "/assets/notactivebutton.png");    
        $("#page2button").attr("src", "/assets/activebutton.png");
        $("#page3button").attr("src", "/assets/notactivebutton.png");
        $("#page4button").attr("src", "/assets/notactivebutton.png");
        $("#page5button").attr("src", "/assets/notactivebutton.png");
        $("#messagesbutton").attr("src", "/assets/notactivebutton.png");
    });

    $(".page3button").click(function(){
        $("#homebutton").attr("src", "/assets/notactivebutton.png");    
        $("#page2button").attr("src", "/assets/notactivebutton.png");
        $("#page3button").attr("src", "/assets/activebutton.png");
        $("#page4button").attr("src", "/assets/notactivebutton.png");
        $("#page5button").attr("src", "/assets/notactivebutton.png");
        $("#messagesbutton").attr("src", "/assets/notactivebutton.png");
    });

    $(".page4button").click(function(){
        $("#homebutton").attr("src", "/assets/notactivebutton.png");    
        $("#page2button").attr("src", "/assets/notactivebutton.png");
        $("#page3button").attr("src", "/assets/notactivebutton.png");
        $("#page4button").attr("src", "/assets/activebutton.png");
        $("#page5button").attr("src", "/assets/notactivebutton.png");
        $("#messagesbutton").attr("src", "/assets/notactivebutton.png");
    });

    $(".page5button").click(function(){
        $("#homebutton").attr("src", "/assets/notactivebutton.png");    
        $("#page2button").attr("src", "/assets/notactivebutton.png");
        $("#page3button").attr("src", "/assets/notactivebutton.png");
        $("#page4button").attr("src", "/assets/notactivebutton.png");
        $("#page5button").attr("src", "/assets/activebutton.png");
        $("#messagesbutton").attr("src", "/assets/notactivebutton.png");
    });    

    $(".messagesbutton").click(function(){
        $("#homebutton").attr("src", "/assets/notactivebutton.png");    
        $("#page2button").attr("src", "/assets/notactivebutton.png");
        $("#page3button").attr("src", "/assets/notactivebutton.png");
        $("#page4button").attr("src", "/assets/notactivebutton.png");
        $("#page5button").attr("src", "/assets/notactivebutton.png");
        $("#messagesbutton").attr("src", "/assets/activebutton.png");
    });

    var c = 0;
    $(document).on('keydown', function(event){        
        
        if ((event.keyCode == 40) && (c < 5)){
            c = c + 1;
            alert("apretaste flecha pa abajo " + c + " veces");
        } else if ((event.keyCode == 38) && (c > 0)) {
            c = c - 1;
            alert("apretaste flecha pa arriba " + c + " veces");
        }
    
        if (c == 0){            
            $("#homebutton").attr("src", "/assets/activebutton.png");    
            $("#page2button").attr("src", "/assets/notactivebutton.png");
            $("#page3button").attr("src", "/assets/notactivebutton.png");
            $("#page4button").attr("src", "/assets/notactivebutton.png");
            $("#page5button").attr("src", "/assets/notactivebutton.png");
            $("#messagesbutton").attr("src", "/assets/notactivebutton.png");
        } else if (c == 1) {
            $("#homebutton").attr("src", "/assets/notactivebutton.png");    
            $("#page2button").attr("src", "/assets/activebutton.png");
            $("#page3button").attr("src", "/assets/notactivebutton.png");
            $("#page4button").attr("src", "/assets/notactivebutton.png");
            $("#page5button").attr("src", "/assets/notactivebutton.png");
            $("#messagesbutton").attr("src", "/assets/notactivebutton.png");            
        } else if (c == 2) {
            $("#homebutton").attr("src", "/assets/notactivebutton.png");    
            $("#page2button").attr("src", "/assets/notactivebutton.png");
            $("#page3button").attr("src", "/assets/activebutton.png");
            $("#page4button").attr("src", "/assets/notactivebutton.png");
            $("#page5button").attr("src", "/assets/notactivebutton.png");
            $("#messagesbutton").attr("src", "/assets/notactivebutton.png");
        }else if (c == 3) {
            $("#homebutton").attr("src", "/assets/notactivebutton.png");    
            $("#page2button").attr("src", "/assets/notactivebutton.png");
            $("#page3button").attr("src", "/assets/notactivebutton.png");
            $("#page4button").attr("src", "/assets/activebutton.png");
            $("#page5button").attr("src", "/assets/notactivebutton.png");
            $("#messagesbutton").attr("src", "/assets/notactivebutton.png");
        }else if (c == 4) {
            $("#homebutton").attr("src", "/assets/notactivebutton.png");    
            $("#page2button").attr("src", "/assets/notactivebutton.png");
            $("#page3button").attr("src", "/assets/notactivebutton.png");
            $("#page4button").attr("src", "/assets/notactivebutton.png");
            $("#page5button").attr("src", "/assets/activebutton.png");
            $("#messagesbutton").attr("src", "/assets/notactivebutton.png");
        }else if (c == 5) {
            $("#homebutton").attr("src", "/assets/notactivebutton.png");    
            $("#page2button").attr("src", "/assets/notactivebutton.png");
            $("#page3button").attr("src", "/assets/notactivebutton.png");
            $("#page4button").attr("src", "/assets/notactivebutton.png");
            $("#page5button").attr("src", "/assets/notactivebutton.png");
            $("#messagesbutton").attr("src", "/assets/activebutton.png");
        }

      

    
    });
    



});




/*
    var scrollInProgress = false;
    $(document).on('keydown', function(e){stateKeyController(e)});
            function stateKeyController (e) {
                var $keyMapDown = {32: true, 34: true, 35: true, 40: true} // 32 space, 34 pgdown, 35 end, 40 arrowDown
                var $keyMapUp = {33: true, 36: true, 38: true} // 33 pgup, 36 home,| 38 arrowUp            
                if (!scrollInProgress) 
                {
                    var current = getCurrent();
                    if (e.which in $keyMapDown) {
                        activateSection(current.next(_.child));
                    } else if (e.which in $keyMapUp) {
                        activateSection(current.prev(_.child));
                    }
                }
            };
});


    $(".start-page").hide().fadeIn(500);
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