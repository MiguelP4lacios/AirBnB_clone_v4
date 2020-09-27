$(document).ready(() => {
  let amenities = [];
  $('.amenities INPUT').change(function () {
    if (this.checked) {
      amenities.push($(this).attr('data-name'));
    } else {
      amenities.pop($(this).attr('data-name'));
    }
    $('.amenities H4').html(Object.values(amenities).join(', '));
  });

  $.get('http://0.0.0.0:5001/api/v1/status/', function (data) {
    if (data.status === 'OK') {
      $('DIV#api_status').removeClass('disable');
      $('DIV#api_status').addClass('available');
    } else {
      if ($('DIV#api_status').hasClass('available')) {
        $('DIV#api_status').removeClass('disable');
        $('DIV#api_status').addClass('disable');
      }
    }
  });
});
