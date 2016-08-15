$(document).ready(function () {
  $('.pull-down').on('click', function () {
    $(this).find('i.pulldown').toggleClass('pullup');
    $('.options').slideToggle();
  });
  $('.options li').on('click', function () {
    $('.year-input').text($(this).text());
    $('.options').slideToggle();
  });
});
