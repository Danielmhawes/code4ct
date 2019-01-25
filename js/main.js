$(document).ready(function(){
    $slides = $('.slides');
    $slides.bind('contentchanged', function(){
      animate($slides);
    });
    animate($slides);
  });
  
  function animate($slides){
    var slidesLength = $slides.find('li').length;
    if(slidesLength>3){
      $slides.find('li:nth-last-child(-n+3)').clone().prependTo($slides);
      $slides.addClass('animate');
      $slides.css('animation-duration', slidesLength*2+'s');
    }
  }

  // count
  var a = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});

  // $(document).ready(function() {

  //   var counters = $(".count");
  //   var countersQuantity = counters.length;
  //   var counter = [];
  
  //   for (i = 0; i < countersQuantity; i++) {
  //     counter[i] = parseInt(counters[i].innerHTML);
  //   }
  
  //   var count = function(start, value, id) {
  //     var localStart = start;
  //     setInterval(function() {
  //       if (localStart < value) {
  //         localStart++;
  //         counters[id].innerHTML = localStart;
  //       }
  //     }, 1);
  //   }
  
  //   for (j = 0; j < countersQuantity; j++) {
  //     count(0, counter[j], j);
  //   }
  // });
