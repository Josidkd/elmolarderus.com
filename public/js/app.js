$(function(){
    $(".tall, .normal").mousedown(function(){       
        $(this).addClass("selected");
    });
 
    $(".tall, .normal").mouseup(function(){     
        $(this).removeClass("selected");
    });

    $("#products-link").click(function() {
      $("#products").show();
    });
    
    $(".button--close").click(function() {
      $(this).closest("section").hide();
    });
});
