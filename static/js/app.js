$(document).ready(function () {
  $('.slide-container .left').on('click', function () {
    var spansWidth = ($('.slide-container .slide-content span').width() + 25) * $('.slide-container .slide-content span').length;
    var contentWidth = $('.slide-container .middle').width();
    var leftLen = parseInt($('.slide-container .slide-content').css('left').split('px'));
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
    var spansWidth = ($('.slide-container .slide-content > span').width() + 25) * $('.slide-container .slide-content > span').length;
    var contentWidth = $('.slide-container .middle').width();
    var leftLen = parseInt($('.slide-container .slide-content').css('left').split('px'));
    var spansWidthNew = leftLen - contentWidth;
    if (Math.abs(spansWidthNew) > spansWidth) {
      spansWidthNew = 0;
    }
    $('.slide-container .slide-content').animate({'left': spansWidthNew});
  });
  // 弹出框弹出
  $('.slide-container .slide-content span').on('click', function () {
    var modalName = $(this).closest('.slide-content').data('modal');
    $('#' + modalName).show();
  });
  // 弹出框消失
  $('#people-table-fa').on('click', function () {
    $(this).hide();
  });
});
