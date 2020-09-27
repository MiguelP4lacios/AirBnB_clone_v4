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
});
