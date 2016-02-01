'use strict';


//const board = $('.square');




let resetGame = function () {
  $('.square').text('');
};

$('button').on('click', resetGame);
let turnCount = 0;

//isMoveValid() -- check to see if space is occupied by X or O.



let makeMark = function () {
  if ($(this).text() === ''){
  if (turnCount % 2 === 0) {
    $(this).text('X');
    //checkfor win
  } else {
    $(this).text('O');
    //checkfor win
  }
  turnCount++;
  }
};


$('.square').on('click', makeMark);














module.exports = true;
