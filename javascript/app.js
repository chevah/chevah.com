jQuery.noConflict();

/*
 * Features Tabs
 */
jQuery(function($){
  $('#features > ol').simpleTabs();
});

/*
 * Testimanials Cycle
 */
jQuery(function($){
  $('#testimonials').cycle({
    timeout: 8000
  });
});