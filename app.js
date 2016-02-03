console.log('linked');
var word = 'cream';
var threeLetters = ['ace', 'car', 'are', 'era', 'arc', 'ear'];
var slot = [];
var wordSubmitted;
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
  wordSubmitted = slot.join('');
  console.log(wordSubmitted);

})

function isThreeLetters() {
  for (var i = 0; i < slot.length; i++) {
    if (slot.join('') === threeLetters[i]) {
      return threeLetters[i];
    }
  }
}
console.log($('#a').attr('class'));
// isThreeLetters();
