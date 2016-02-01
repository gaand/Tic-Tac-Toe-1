'use strict';


let resetGame = function () {
  $('.square').text('');
};

let turnCount = 0;
let makeMark = function () {
  if (turnCount % 2 === 0) {
    $(this).text('X');
    //checkfor win
  } else {
    $(this).text('O');
    //checkfor win
  }
  turnCount++;
};

$('.square').on('click', makeMark);

$('button').on('click', resetGame);











module.exports = true;
