console.log('linked');
var slot = [];
var letters = [];
var answeredWords = [];
var word = 'cream';
var wordSubmitted;
var score = 0;
var cream =
  'https://littlefilmlab.com/development/vientwist/wordlist.php?letters=';
var message = 'Good Job Trick!'
// var slot2 = [];





$.get(cream, function(data) {
    globalData = data;
    var letters = data.letters.split('');
    var wordList = data.word_list;
  $('.letters').each(function(index) {
    $(this).attr('id', letters[index]);
    $(this).html(letters[index]);
  });

  $('#submit').click(function() {

    $.playSound('clickSound');
    $('#alertMessage').html(message);

    if($.inArray(wordSubmitted, wordList) !== -1) {
        if(wordSubmitted.length === 5) {
          $('#alertMessage').html('Congratulations! You can move on to the next round.');
        }
            getScore();
            $('#answers').append('<p>' + wordSubmitted + '</p>')
            submitWords();

    } else if($.inArray(wordSubmitted, wordList) === -1) {
      $('#alertMessage').html('NOT A WORD');
    }

  });

});

function selectLetter(){
  $('.letters').click(function() {
    $('#slot1').append($(this));
    slot.push($(this).text());
    letters.push(this);
    // console.log("this is:", this);
    // console.log("slot contains:", slot);
    // console.log("letters are:", letters[0]);
    joinWords();
    adjustButton();
    $.playSound('clickSound');

  });
};
selectLetter();

//twist function, to shuffle the letter in place
$('#shuffle').click(shuffle);

$('#clear').click(function() {
  $('#slot1').empty();
  letters.forEach(function(element) {
    $('#letterBoard').append(element);
  })
  // console.log(letters);
   // append each DOM element in the array
  slot = [];
  letters = [];
  wordSubmitted = '';
  var FOO = $('.letters');
    for (var i = 0; i < FOO.length; i++) {
      // console.log(FOO[i])
      $(FOO[i]).off('click');
    }
  selectLetter();
  $.playSound('clickSound');

  // $('.letters').on('click', function() {
  //   $('#slot1').append(this);
  // });
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
    $('#alertMessage').html('Only words with three or more letters are allowed!');
  }
  $('#score').html(score);
  sessionStorage.setItem('Score', score);
}


function addWordToPage() {

}
function adjustButton() {
  return $('.btn').css('margin-top', '20px');
}
// function pushToArray(a) {
//   slot.push($(a).html())
// }

function submitWords() {
  answeredWords.push(wordSubmitted);
}

function joinWords() {
  // localStorage.setItem('wordSubmitted', slot.join(''));
  return wordSubmitted = slot.join('');
  // return wordSubmitted = localStorage['wordSubmitted'];
}


function shuffle() {
  var parent = $("#letterBoard");
  var divs = parent.children();
  while (divs.length) {
    parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[
      0]);
  };
  $.playSound('clickSound');
  $('#letterBoard').mixItUp();

}



$.extend({
    playSound: function(){
      return $(
        '<audio autoplay="autoplay" style="display:none;">'
          + '<source src="' + arguments[0] + '.mp3" />'
          + '<source src="' + arguments[0] + '.ogg" />'
          + '<embed src="' + arguments[0] + '.mp3" hidden="true" autostart="true" loop="false" class="playSound" />'
        + '</audio>'
      ).appendTo('body');
    }
  });


$('body').keypress(function(args) {
    if (args.keyCode == 13) {
        $("#submit").click();
        return false;
    } else if (args.keyCode == 32) {
      $('#shuffle').click();

    }
});
// function haveSubmitted() {
//   if($.inArray(wordSubmitted, answeredWords) !== -1) {
//     alert('You have already entered this word!');
//   }
// }

//
// $(document).ready(function() {
//   bindEvents();
//   startGame();
// })
//
// bindEvents() {
//   listenerA()
//   listenerB()
// }
//
// startGame() {
//
// }
