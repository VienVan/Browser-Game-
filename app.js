console.log('linked');
var word = 'cream';
var threeLetters = ['ace', 'car', 'are', 'era', 'arc', 'ear'];
var slot = [];
var wordSubmitted;
var score = 0;



$('.letters').click(function(event) {
  $('#slot1').prepend(this);
  slot.push($(this).attr('id'));
  wordSubmitted = slot.join('');
})

$('#submit').click(function() {
  if (wordSubmitted === word) {
    alert('Winner Winner!');
  }
  getScore();
  console.log(score);
});

$('#shuffle').click(function() {
  var parent = $("#letterBoard");
  var divs = parent.children();
  while (divs.length) {
    parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[
      0]);
  }
});

function getScore() {
  if (wordSubmitted.length === 3) {
    score += 300;
  } else if (wordSubmitted.length === 4) {
    score += 400;
  } else if (wordSubmitted.length === 5) {
    score += 500;
  } else {
    alert('Only words with three or more letters are allowed!');
  }
}
