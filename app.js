console.log('linked');
var word = 'cream';
var threeLetters = ['ace', 'car', 'are', 'era', 'arc', 'ear']; //test
var slot = [];
var wordSubmitted;
var score = 0;
var cream =
  'https://littlefilmlab.com/development/vientwist/wordlist.php?letters=bliss';

//adds letter to board slot, push letter into an array, then join the letters to string
$('.letters').click(function(event) {
  $('#slot1').append(this);
  slot.push($(this).attr('id'));
  wordSubmitted = slot.join('');
  $('.btn').css('margin-top', '20px');
})

//testing to see if wordSubmitted is a word (in this case the correct 5 letter word)
$('#submit').click(function() {
  if (wordSubmitted === word) {
    alert('Winner Winner!');
  }
  getScore();
  $('#score').html(score);
});

//twist function, to shuffle the letter in place
$('#shuffle').click(function() {
  var parent = $("#letterBoard");
  var divs = parent.children();
  while (divs.length) {
    parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[
      0]);
  }
});

//get the score of each word submitted,
//**note** haven't gotten reset to work yet so can't add more than one score
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

$.get(cream, function(data) {
  var letters = data.letters.split('');
  for (var i = 0; i < letters.length; i++) {
    $('.letters').html(letters[i]);
  }
});
