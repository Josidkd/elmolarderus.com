$(function(){
    
  function renderTemplate(template) {
       $.ajax({
        type: 'GET',
        url: template,
        success: function (data) {
          $(".content").html(data);
        }
      })
    }

   $( document ).on( "click", "#products-link", function(e) {
      e.preventDefault();
      renderTemplate('/products');
   });

   $( document ).on( "click", "a.button--close", function(e) {
      e.preventDefault();
      renderTemplate('/');
   });
});
