// Shorthand for $( document ).ready()
$(function() {

  $("#gallery").unitegallery({
    gallery_theme: "grid",
    thumb_width: 117.2,
    thumb_height: 75,
    thumb_show_loader: true,
    thumb_loader_type: "dark",
    gridpanel_vertical_scroll: false,
    thumb_fixed_size: false,
    theme_hide_panel_under_width: 768,
    theme_panel_position: "right",
    slider_enable_play_button: false,
    slider_enable_zoom_panel: false,
    slider_fullscreen_button_align_hor: "right",
    slider_control_zoom: false,
    slider_loader_type: 3,
    slider_loader_color: "black",
  });
  
// scroll tracker init
  $.scrollIt({
    upKey: 38,             // key code to navigate to the next section
    downKey: 40,           // key code to navigate to the previous section
    easing: 'linear',      // the easing function for animation
    scrollTime: 600,       // how long (in ms) the animation takes
    activeClass: 'active', // class given to the active nav element
    onPageChange: null,    // function(pageIndex) that is called when page is changed
    topOffset: -225           // offset (in px) for fixed top navigation
  });
  
  // set the sticky headers and behavior when 
  // stuck and unstuck of the secondary
  return $(".sticky-header").stick_in_parent({
    parent: ".sticky-parent"
  }).on("sticky_kit:stick", function(e) {

  })
  .on("sticky_kit:unstick", function(e) {
  })
  // stops the map from scrolling when the user is scrolling down the page
  $('.map-container')
    .click(function(){
      $(this).find('iframe').addClass('clicked')})
    .mouseleave(function(){
      $(this).find('iframe').removeClass('clicked')});
  
});
