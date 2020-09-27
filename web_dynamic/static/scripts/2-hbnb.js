$(document).ready(() => {
  let name = [];
  $('.amenities INPUT').change(function () {
    if (this.checked) {
      name.push($(this).attr('data-name'));
    } else {
      name.pop($(this).attr('data-name'));
    }
    $('.amenities H4').html(Object.values(name).join(', '));
  });
  $.get('http://952439a6e64d.19.hbtn-cod.io:5000/api/v1/status', function (data) {
    if (data.status === 'OK') {
      $('DIV#api_status').addClass('available');
    } else {
      $('DIV#api_status').addClass('disable');
    }
  });
});
