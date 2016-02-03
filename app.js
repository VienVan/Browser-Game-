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

$('#a').click(function() {
  $('#slot1').append(this);
})
$('#e').click(function() {
    $('#slot2').append(this);
  })
  // isThreeLetters();
