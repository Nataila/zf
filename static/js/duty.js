$(document).ready(function () {
  // 下拉框
  $('.pull-down').on('click', function () {
    $(this).find('i.pulldown').toggleClass('pullup');
    $('.options').slideToggle();
  });
  $('.options li').on('click', function () {
    $('.year-input').text($(this).text());
    $('.options').slideToggle();
  });

  // tab切换
  $('.nav-btn-groups li').on('click', function () {
    $('div.content > div').hide();
    var content_name = $(this).data('content');
    $('div#' + content_name).show();
  })
});
