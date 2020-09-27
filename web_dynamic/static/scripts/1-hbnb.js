$(document).ready(() => {
  const id = [];
  const name = [];
  $('.amenities INPUT').click(function () {
    if ($(this).prop('checked') === true) {
      id.push($(this).data('id'));
      name.push($(this).parents('LI').text());
      $('.amenities H4').text(name);
    } else if ($(this).prop('checked') === false) {
      id.pop($(this).removeData('id'));
      name.pop($(this).parents('LI').text());
      $('.amenities H4').text(name);
    }
  });
});
