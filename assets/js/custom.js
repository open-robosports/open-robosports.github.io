$(document).ready(function() {
  // Aplica efecto fadeIn al cargar la web
  $('.showOnReady').each(function(i) {
    $(this).animate({opacity: '1'}, 1500);
  });

  // Deshabilita el autoplay para smartphones
  if (/Android|webOS|iPhone|iPad|BlackBerry|Windows Phone|Opera Mini|IEMobile|Mobile/i
          .test(navigator.userAgent)) {
    $('video').removeAttr('autoplay');
    $('video:not(.home-video)').attr('controls', 'controls');
  } else {
    $('video').attr('autoplay');
  }

  // Aplica efecto fadeIn al hacer scroll o al cargar la web con un scroll
  // predefinido
  $(window).scroll(function() {
    $('.showOnScroll').each(function(i) {
      var bottom_of_object = $(this).position().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height() - 250;

      if (bottom_of_window > bottom_of_object) {
        $(this).animate({opacity: '1'}, 1500);
      }
    });
  });
  $('.showOnScroll').each(function(i) {
    var bottom_of_object = $(this).position().top + $(this).outerHeight();
    var bottom_of_window = $(window).scrollTop() + $(window).height() - 250;

    if (bottom_of_window > bottom_of_object) {
      $(this).animate({opacity: '1'}, 1500);
    }
  });

  // Maneja los botones de "Ver más" de los ranking
  $('.list-group-item.more').on('click', function(e) {
    if ($(this).hasClass('open')) {
      $('.more-list', $(this).closest('.ranking')).slideUp(250);
      $(this).removeClass('open');
      $(this).html(
          '<i class="material-icons margin-right-0">arrow_drop_down</i> Ver más');
    } else {
      $('.more.open').trigger('click');
      $('.more-list', $(this).closest('.ranking')).slideDown(250);
      $(this).addClass('open');
      $(this).html(
          '<i class="material-icons margin-right-0">arrow_drop_up</i> Ver menos');
    }
  });

  /* // Crea los fullCalendar
  $('#competiciones-calendar').fullCalendar({
    // put your options and callbacks here
    height: 'auto',
    header: {left: 'today prev,next', center: 'title', right: 'listYear'},
    themeSystem: 'bootstrap4',
    locale: 'es',
    defaultView: 'listYear',
    // events:"/competiciones/eventos.json",
    events: function(start, end, timezone, callback) {
      $.ajax({
        url: '../competiciones/eventos.json',
        type: 'GET',
        datatype: 'json',
        success: function(doc) {
          console.log(doc);
          var events = [];
          $.each(doc, function(i, event) {
            events.push({
              title: event.title,
              start: event.start,
              end: event.end,
              allDay: event.allDay,
              url: event.url
            });
          });
          callback(events);
        },
        error: function(err) {
          alert('Error in fetching data');
        }
      });
    },
    eventClick: function(event) {
      if (event.url) {
        window.open(event.url, '_blank');
        return false;
      }
    }
  }); */

  
    // Preloader
    setTimeout(function() {
      $('.preloader').fadeOut(500);
    }, 1500)
});
