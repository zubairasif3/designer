// carousels
jQuery(".product-carousel").owlCarousel({
    autoplay: false,
    rewind: false,
    loop: false,
    margin: 20, 
    responsiveClass: true,
    autoHeight: true,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
  
      600: {
        items: 1
      },
  
      1024: {
        items: 4
      },
  
      1366: {
        items: 6
      }
    }
});

jQuery(".category-carousel").owlCarousel({
    autoplay: false,
    rewind: false,
    loop: false,
    margin: 20, 
    responsiveClass: true,
    autoHeight: true,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 2
      },
  
      600: {
        items: 3
      },
  
      1024: {
        items: 5
      },
  
      1366: {
        items: 7
      }
    }
});


// countdown

var countDownDate = new Date("April 12, 2024 10:37:25").getTime();

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
  document.getElementById("countDownTimer").innerHTML = hours + ":"
  + minutes + ":" + seconds + "";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countDownTimer").innerHTML = "EXPIRED";
  }
}, 1000);