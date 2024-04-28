// carousels
jQuery(".product-carousel").owlCarousel({
    autoplay: false,
    rewind: false,
    loop: true,
    margin: 20, 
    responsiveClass: true,
    autoHeight: true,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
  
      600: {
        items: 2
      },

      720: {
        items: 3
      },

      850: {
        items: 4
      },
  
      1124: {
        items: 5
      },
  
      1366: {
        items: 6
      }
    }
});

jQuery(".category-carousel").owlCarousel({
    autoplay: false,
    rewind: false,
    loop: true,
    margin: 20, 
    responsiveClass: true,
    autoHeight: true,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 2
      },
  
      600: {
        items: 4
      },
  
      1024: {
        items: 5
      },
  
      1366: {
        items: 7
      }
    }
});
$( ".owl-prev").html('<i class="fa fa-chevron-left"></i>');
$( ".owl-next").html('<i class="fa fa-chevron-right"></i>');


// countdown

var countDownDate = new Date("April 25, 2024 12:30:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = days * Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
    var timer = hours + ":" + minutes + ":" + seconds + "";
  $("#countDownTimer").html(timer);
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    $("#countDownTimer").html("EXPIRED");
  }
}, 1000);