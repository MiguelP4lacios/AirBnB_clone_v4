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
  $.get('http://0.0.0.0:5001/api/v1/status/', function (data) {
    if (data.status === 'OK') {
      console.log("STATUS OK")
      $('DIV#api_status').toogleClass('available');
    }
  });
});
