$(function(){
    $(".tall, .normal").mousedown(function(){       
        $(this).addClass("selected");
    });
 
    $(".tall, .normal").mouseup(function(){     
        $(this).removeClass("selected");
    });

   $( document ).on( "click", "#products-link", function(e) {
      e.preventDefault();
      $.ajax({
        type: 'GET',
        url: '/products/',
        success: function (data) {
          //Assuming the returned data is pure HTML
          $("nav").replaceWith(data);
        }
      })
    });
   $( document ).on( "click", "a.button--close", function(e) {
      console.log('hola');
      e.preventDefault();
      $.ajax({
        type: 'GET',
        url: '/',
        success: function (data) {
          //Assuming the returned data is pure HTML
          $("section").replaceWith(data);
        }
      })
    });
});
