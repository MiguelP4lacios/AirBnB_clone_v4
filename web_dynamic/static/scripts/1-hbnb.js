$(document).ready(() => {
  const id = [];
  const name = [];
  $('.amenities INPUT').click(() => {
    if ($(this).prop('checked') === true) {
      id.push($('.amenities INPUT').data('id'));
      name.push($(this).parents('LI').html());
      $('.amenities H4').html(name);
    } else if ($(this).prop('checked') === false) {
      id.pop($('.amenities INPUT').removeData('id'));
      name.pop($(this).parents('LI').html());
      $('.amenities H4').html(name);
    }
  });
});
