$(document).ready(function() {

  // переключение десктоп планшет мобила в секции Интерфейсы
  if ($(window).width() < 1000) {
    $('.interfaces__btn').each(function (i, el) {
      $(this).on('click', function () {
        $('.interfaces__btns-container').removeClass('interfaces__btn-desktop-active interfaces__btn-mobile-active interfaces__btn-tablet-active');
        $('.interfaces__btn').removeClass('interfaces__btn--active');
        $('.interfaces__img-mobile').removeClass('interfaces__img-mobile--desktop interfaces__img-mobile--tablet interfaces__img-mobile--mobile');
        if (i === 0) {
          $('.interfaces__btns-container').addClass('interfaces__btn-desktop-active');
          $('.interfaces__btn-desktop').addClass('interfaces__btn--active');
          $('.interfaces__img-mobile').addClass('interfaces__img-mobile--desktop');
        } else if (i === 1) {
          $('.interfaces__btns-container').addClass('interfaces__btn-tablet-active');
          $('.interfaces__btn-tablet').addClass('interfaces__btn--active');
          $('.interfaces__img-mobile').addClass('interfaces__img-mobile--tablet');
        } else if (i === 2) {
          $('.interfaces__btns-container').addClass('interfaces__btn-mobile-active');
          $('.interfaces__btn-mobile').addClass('interfaces__btn--active');
          $('.interfaces__img-mobile').addClass('interfaces__img-mobile--mobile');
        }
      });
    });
  } else {
    $('.interfaces__btn').each(function (i, el) {
      $(this).on('click', function () {
        $('.interfaces__btns-container').removeClass('interfaces__btn-desktop-active interfaces__btn-mobile-active interfaces__btn-tablet-active');
        $('.interfaces__btn').removeClass('interfaces__btn--active');
        $('.interfaces__right-img').removeClass('interfaces__right-img--desktop interfaces__right-img--tablet interfaces__right-img--mobile');
        if (i === 0) {
          $('.interfaces__btns-container').addClass('interfaces__btn-desktop-active');
          $('.interfaces__btn-desktop').addClass('interfaces__btn--active');
          $('.interfaces__right-img').addClass('interfaces__right-img--desktop');
        } else if (i === 1) {
          $('.interfaces__btns-container').addClass('interfaces__btn-tablet-active');
          $('.interfaces__btn-tablet').addClass('interfaces__btn--active');
          $('.interfaces__right-img').addClass('interfaces__right-img--tablet');
        } else if (i === 2) {
          $('.interfaces__btns-container').addClass('interfaces__btn-mobile-active');
          $('.interfaces__btn-mobile').addClass('interfaces__btn--active');
          $('.interfaces__right-img').addClass('interfaces__right-img--mobile');
        }
      });
    });
  }

  // открытие меню
  $(".header__btn-menu").on("click", function (e) {
    e.preventDefault(),
      $('.header__btn-menu').toggleClass('header__btn-menu--open');
    $(".header-menu-container").slideToggle(200);
  });

  // Кнопки Графика
  $('.about__graph-btn-graph').each(function (i, el) {
    $(this).on('click', function () {
      $('.about__graph-btn-graph').removeClass('about__graph-btn-graph--active');
      $(this).addClass('about__graph-btn-graph--active');
    });
  });

  // График
  var chart = new Chartist.Line('.ct-chart', {
    series: [[
      {x: 11.11, y: 60},
      {x: 12.11, y: 55},
      {x: 13.11, y: 80},
      {x: 14.11, y: 90}
    ]]
  }, {
    axisX: {
      type: Chartist.FixedScaleAxis,
      ticks: [11.11, 12.11, 13.11, 14.11]
    },
    axisY: {
      type: Chartist.FixedScaleAxis,
      ticks: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
      low: 10
    },
    showPoint: true
  });

  var seq = 0;

  chart.on('draw', function(data) {
    if(data.type === 'line') {
      // If the drawn element is a line we do a simple opacity fade in. This could also be achieved using CSS3 animations.
      data.element.animate({
        opacity: {
          // The delay when we like to start the animation
          begin: seq++ * 40,
          // Duration of the animation
          dur: 500,
          // The value where the animation should start
          from: 0,
          // The value where it should end
          to: 1
        },
        x1: {
          begin: seq++ * 80,
          dur: 500,
          from: data.x - 100,
          to: data.x,
          // You can specify an easing function name or use easing functions from Chartist.Svg.Easing directly
          easing: Chartist.Svg.Easing.easeOutQuart
        }
      });
    }
  });

  chart.on('draw', function(data) {
    if(data.type === 'point') {
      // If the drawn element is a line we do a simple opacity fade in. This could also be achieved using CSS3 animations.
      data.element.animate({
        opacity: {
          // The delay when we like to start the animation
          begin: seq++ * 80,
          // Duration of the animation
          dur: 500,
          // The value where the animation should start
          from: 0,
          // The value where it should end
          to: 1
        },
        y1: {
          begin: seq++ * 80,
          dur: 500,
          from: data.y - -50,
          to: data.y,
          // You can specify an easing function name or use easing functions from Chartist.Svg.Easing directly
          easing: Chartist.Svg.Easing.easeOutQuart
        }
      });
    }
  });

  $('.about__graph-btn-graph').each(function (i, el) {
    $(this).on('click', function () {
      if (i === 0) {
        var chart = new Chartist.Line('.ct-chart', {
          series: [[
            {x: 11.11, y: 60},
            {x: 12.11, y: 55},
            {x: 13.11, y: 80},
            {x: 14.11, y: 90}
          ]]
        }, {
          axisX: {
            type: Chartist.FixedScaleAxis,
            ticks: [11.11, 12.11, 13.11, 14.11]
          },
          axisY: {
            type: Chartist.FixedScaleAxis,
            ticks: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
            low: 10
          },
          showPoint: true
        });

        var seq = 0;

        chart.on('draw', function(data) {
          if(data.type === 'line') {
            data.element.animate({
              opacity: {
                begin: seq++ * 40,
                dur: 500,
                from: 0,
                to: 1
              },
              x1: {
                begin: seq++ * 80,
                dur: 500,
                from: data.x - 50,
                to: data.x,
                easing: Chartist.Svg.Easing.easeOutQuart
              }
            });
          }
        });

        chart.on('draw', function(data) {
          if(data.type === 'point') {
            data.element.animate({
              opacity: {
                begin: seq++ * 80,
                dur: 500,
                from: 0,
                to: 1
              },
              y1: {
                begin: seq++ * 80,
                dur: 500,
                from: data.y - -50,
                to: data.y,
                easing: Chartist.Svg.Easing.easeOutQuart
              }
            });
          }
        });

      } else if (i === 1) {
        var chart = new Chartist.Line('.ct-chart', {
          series: [[
            {x: 11.11, y: 30},
            {x: 12.11, y: 50},
            {x: 13.11, y: 90},
            {x: 14.11, y: 80}
          ]]
        }, {
          axisX: {
            type: Chartist.FixedScaleAxis,
            ticks: [11.11, 12.11, 13.11, 14.11]
          },
          axisY: {
            type: Chartist.FixedScaleAxis,
            ticks: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
            low: 10
          },
          showPoint: true
        });

        var seq = 0;

        chart.on('draw', function(data) {
          if(data.type === 'line') {
            data.element.animate({
              opacity: {
                begin: seq++ * 40,
                dur: 500,
                from: 0,
                to: 1
              },
              x1: {
                begin: seq++ * 80,
                dur: 500,
                from: data.x - 50,
                to: data.x,
                easing: Chartist.Svg.Easing.easeOutQuart
              }
            });
          }
        });

        chart.on('draw', function(data) {
          if(data.type === 'point') {
            data.element.animate({
              opacity: {
                begin: seq++ * 80,
                dur: 500,
                from: 0,
                to: 1
              },
              y1: {
                begin: seq++ * 80,
                dur: 500,
                from: data.y - -50,
                to: data.y,
                easing: Chartist.Svg.Easing.easeOutQuart
              }
            });
          }
        });

      } else if (i === 2) {
        var chart = new Chartist.Line('.ct-chart', {
          series: [[
            {x: 11.11, y: 80},
            {x: 12.11, y: 20},
            {x: 13.11, y: 70},
            {x: 14.11, y: 40}
          ]]
        }, {
          axisX: {
            type: Chartist.FixedScaleAxis,
            ticks: [11.11, 12.11, 13.11, 14.11]
          },
          axisY: {
            type: Chartist.FixedScaleAxis,
            ticks: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
            low: 10
          },
          showPoint: true
        });

        var seq = 0;

        chart.on('draw', function(data) {
          if(data.type === 'line') {
            data.element.animate({
              opacity: {
                begin: seq++ * 40,
                dur: 500,
                from: 0,
                to: 1
              },
              x1: {
                begin: seq++ * 80,
                dur: 500,
                from: data.x - 50,
                to: data.x,
                easing: Chartist.Svg.Easing.easeOutQuart
              }
            });
          }
        });

        chart.on('draw', function(data) {
          if(data.type === 'point') {
            data.element.animate({
              opacity: {
                begin: seq++ * 80,
                dur: 500,
                from: 0,
                to: 1
              },
              y1: {
                begin: seq++ * 80,
                dur: 500,
                from: data.y - -50,
                to: data.y,
                easing: Chartist.Svg.Easing.easeOutQuart
              }
            });
          }
        });

      } else if (i === 3) {
        var chart = new Chartist.Line('.ct-chart', {
          series: [[
            {x: 11.11, y: 40},
            {x: 12.11, y: 60},
            {x: 13.11, y: 70},
            {x: 14.11, y: 80}
          ]]
        }, {
          axisX: {
            type: Chartist.FixedScaleAxis,
            ticks: [11.11, 12.11, 13.11, 14.11]
          },
          axisY: {
            type: Chartist.FixedScaleAxis,
            ticks: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
            low: 10
          },
          showPoint: true
        });

        var seq = 0;

        chart.on('draw', function(data) {
          if(data.type === 'line') {
            data.element.animate({
              opacity: {
                begin: seq++ * 40,
                dur: 500,
                from: 0,
                to: 1
              },
              x1: {
                begin: seq++ * 80,
                dur: 500,
                from: data.x - 50,
                to: data.x,
                easing: Chartist.Svg.Easing.easeOutQuart
              }
            });
          }
        });

        chart.on('draw', function(data) {
          if(data.type === 'point') {
            data.element.animate({
              opacity: {
                begin: seq++ * 80,
                dur: 500,
                from: 0,
                to: 1
              },
              y1: {
                begin: seq++ * 80,
                dur: 500,
                from: data.y - -50,
                to: data.y,
                easing: Chartist.Svg.Easing.easeOutQuart
              }
            });
          }
        });

      } else if (i === 4) {
        var chart = new Chartist.Line('.ct-chart', {
          series: [[
            {x: 11.11, y: 80},
            {x: 12.11, y: 20},
            {x: 13.11, y: 30},
            {x: 14.11, y: 40}
          ]]
        }, {
          axisX: {
            type: Chartist.FixedScaleAxis,
            ticks: [11.11, 12.11, 13.11, 14.11]
          },
          axisY: {
            type: Chartist.FixedScaleAxis,
            ticks: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
            low: 10
          },
          showPoint: true
        });

        var seq = 0;

        chart.on('draw', function(data) {
          if(data.type === 'line') {
            data.element.animate({
              opacity: {
                begin: seq++ * 40,
                dur: 500,
                from: 0,
                to: 1
              },
              x1: {
                begin: seq++ * 80,
                dur: 500,
                from: data.x - 50,
                to: data.x,
                easing: Chartist.Svg.Easing.easeOutQuart
              }
            });
          }
        });

        chart.on('draw', function(data) {
          if(data.type === 'point') {
            data.element.animate({
              opacity: {
                begin: seq++ * 80,
                dur: 500,
                from: 0,
                to: 1
              },
              y1: {
                begin: seq++ * 80,
                dur: 500,
                from: data.y - -50,
                to: data.y,
                easing: Chartist.Svg.Easing.easeOutQuart
              }
            });
          }
        });

      }
    });
  });

});
