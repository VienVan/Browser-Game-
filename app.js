console.log('linked');
var slot = [];
var letters = [];
var answeredWords = [];
var wordSubmitted;
var score = 0;
var url =
  'https://littlefilmlab.com/development/vientwist/wordlist.php?letters=';
var message = 'Good Job Trick!'
// var slot2 = [];
var submittedCheck = 0;
var wordList;



callData();
selectLetter();


function callData() {
  $.get(url, function(data) {

      var letters = data.letters.split('');
      wordList = data.word_list;

    $('.letters').each(function(index) {
      $(this).attr('id', letters[index]);
      $(this).html(letters[index]);
    });

    $('#submit').click(function() {
          allWordsAnswered();
          isSubmitted();
          $.playSound('clickSound');

          if( submittedCheck === 1){
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

                    }
    });
        // if(wordList.length === answeredWords.length) {
        //   $('#alertMessage').html('Congratulations! You have found every single word!')
        //   score += 1000;
        // }
  });

}

function allWordsAnswered() {
  if(wordList.length === answeredWords.length) {
    alert('won!');
  }
}
function selectLetter(){
    $('.letters').click(function() {
          $('#slot1').append($(this));
          slot.push($(this).text());
          letters.push(this);
          joinWords();
          adjustButton();
          $.playSound('clickSound');

        });
};


    $('#shuffle').click(shuffle);

    $('body').keypress(function(args) {
        if (args.which === 13) {
            $("#submit").click();
        } else if (args.which === 32) {
          $('#shuffle').click();
        }
    });

    $('body').keydown(function(args) {
      if (args.which === 8) {
        $('#clear').click();
      } else if (args.which === 79) {
        alert("o");
      }
    });


$('#clear').click(function() {
      $('#slot1').empty();
      letters.forEach(function(element) {
        $('#letterBoard').append(element);
      })
      slot = [];
      letters = [];
      wordSubmitted = '';
      var FOO = $('.letters');
        for (var i = 0; i < FOO.length; i++) {
            $(FOO[i]).off('click');
        }
      selectLetter();
      $.playSound('clickSound');

});


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


function adjustButton() {
    return $('.btn').css('margin-top', '20px');
}

function submitWords() {
    answeredWords.push(wordSubmitted);
    sessionStorage['answers'] = answeredWords;
}

function isSubmitted() {
  if($.inArray(wordSubmitted, answeredWords) !== -1) {
    $('#alertMessage').html('You have already guessed this word!');
    submittedCheck = 0;
  } else {
    submittedCheck = 1;
  }
};

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
