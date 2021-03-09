$('.Header-switch').on('click', function () {
  if ($('.Header').is('.menu-show')) {
    $('.Header').removeClass('menu-show')
  } else {
    $('.Header').addClass('menu-show')
  }
})

$('.Highlights-slider').flickity({
  // options
  cellAlign: 'left',
  contain: true,
  
  pageDots: false,
  draggable: false,
  arrowShape: { 
    x0: 25,
    x1: 55, y1: 35,
    x2: 60, y2: 30,
    x3: 35
  },
});
