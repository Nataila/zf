$(document).ready(function () {
  $('.content .icons i').on('click', function () {
    $('.sub-content').hide();
    var showContentName = $(this).data('content');
    $('#' + showContentName + '-content').show();
  });
});
