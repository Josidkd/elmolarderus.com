$(function(){
  // we could use this library
  $(document).pjax('a[data-pjax]', '#data-container');
  $(window).load(function() {
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");;
  });
});
  // or try to do something like this
  /*function renderTemplate(template) {
   $.ajax({
      type: 'GET',
        url: template,
        success: function (data) {
          //Assuming the returned data is pure HTML
          $(".container").html(data);
          history.pushState({'name': template}, '', template);
        }
    })

  }
  function clickAndRender(element, template) {
    $(document).on('click', element, function(e) {
      var href = $(this).attr("href");
      e.preventDefault();
      renderTemplate(template);
     });
  }
  clickAndRender('#products-link', '/products');
  clickAndRender('.button--close', '/');
  $(window).on("popstate", function () {
    // if the state is the page you expect, pull the name and load it.
    if (history.state) {
      renderTemplate(history.state.name);
    }
});*/
