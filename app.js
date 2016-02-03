console.log('linked');
var word = 'cream';
var threeLetters = ['ace', 'car', 'are', 'era', 'arc', 'ear'];
var slot = [];
var answers = $('#answer').val();
//
// function isThreeLetters() {
//   for (var i = 0; i < threeLetters.length; i++) {
//     if (answers === threeletters[i]) {
//       $('#answers').append('<p>' + threeLetters[i] + '</p>');
//     }
//   }
// }

$('.letters').click(function(event) {
  $('#slot1').prepend(this);
  slot.push($(this).attr('id'));
  console.log(slot);
})
console.log($('#a').attr('class'));
// isThreeLetters();
