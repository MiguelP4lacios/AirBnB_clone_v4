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
});
