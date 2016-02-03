console.log('linked');
var slot = [];
var letters =[];
var word = 'cream';
var wordSubmitted;
var score = 0;
var cream =
  'https://littlefilmlab.com/development/vientwist/wordlist.php?letters=cream';
var x;
var globalData;



//adds letter to board slot, push letter into an array, then join the letters to string
$('.letters').click(function(event) {
  $('#slot1').append(this);
  letters.push($(this));
  slot.push($(this).attr('id'));
  joinWords();
  adjustButton();
})


//testing to see if wordSubmitted is a word (in this case the correct 5 letter word)
$('#submit').click(function() {
  if (wordSubmitted === word) {
    alert('Winner Winner!');
  }
  getScore();
});

//twist function, to shuffle the letter in place
$('#shuffle').click(shuffle);

$('#clear').click(function() {

  $('#slot1').empty();
  $('#letterBoard').append(letters);
  wordSubmitted='';
})

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
  $('#score').html(score);
}



function adjustButton() {
  return $('.btn').css('margin-top', '20px');
}

function joinWords() {
  return wordSubmitted = slot.join('');
}

function shuffle() {
  var parent = $("#letterBoard");
  var divs = parent.children();
  while (divs.length) {
    parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[
      0]);
  };
}
$.get(cream, function(data) {
    var letters = data.letters.split('');
  $('.letters').each(function(index) {
    $(this).attr('id', letters[index]);
    $(this).html(letters[index]);
  })
  var wordList = data.word_list;
  globalData = data.word_list;

  // console.log(wordList);

  // while(letters.length > 0) {
  //   var i = Math.floor(Math.random() letters.length);
  //
  // }
  // for (var i = 0; i < letters.length; i++) {
  //   $('.letters').html(letters[i]);
  //   // $('.letters').attr('id', i);
  //   // console.log($('.letters'));
  // }
});

console.log(globalData);
