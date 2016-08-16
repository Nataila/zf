$(document).ready(function () {
  $('.slide-container .left').on('click', function () {
    var spansWidth = ($('.slide-container .slide-content span').width() + 25) * $('.slide-container .slide-content span').length;
    var contentWidth = $('.slide-container .middle').width();
    var leftLen = parseInt($('.slide-container .slide-content').css('left').split('px'));
    console.log(leftLen);
    if (leftLen === 0) {
      return false
    }
    var spansWidthNew = leftLen + contentWidth;
    if (Math.abs(spansWidthNew) > spansWidth) {
      spansWidthNew = 0;
    }
    $('.slide-container .slide-content').animate({'left': spansWidthNew});
  });
  $('.slide-container .right').on('click', function () {
    var spansWidth = ($('.slide-container .slide-content span').width() + 25) * $('.slide-container .slide-content span').length;
    var contentWidth = $('.slide-container .middle').width();
    var leftLen = parseInt($('.slide-container .slide-content').css('left').split('px'));
    var spansWidthNew = leftLen - contentWidth;
    if (Math.abs(spansWidthNew) > spansWidth) {
      spansWidthNew = 0;
    }
    $('.slide-container .slide-content').animate({'left': spansWidthNew});
  });
  $('.slide-container .slide-content span').on('click', function () {
    console.log(123);
    var modalName = $(this).closest('.slide-content').data('modal');
    $('#' + modalName).show();
  })
});
