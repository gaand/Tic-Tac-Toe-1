'use strict';


//const board = $('.square');




let resetGame = function () {
  $('.square').html('');
};

$('button').on('click', resetGame);



//let player = ['X', 'O'];
const board = ['','','','','','','','',''];
let turnCount = 0;

let checkRow = function(a, b, c) {
    if (a === 'X' && b === 'X' && c === 'X') {
        alert('X wins');
        return 'X is the winner';
    } else if (a === 'O' && b === 'O' && c === 'O') {
      alert('O wins');
        return 'O is the winner';

    }
};

let getWinner = function () {
    // checking rows
    checkRow(board[0], board[1], board[2]);
    checkRow(board[3], board[4], board[5]);
    checkRow(board[6], board[7], board[8]);
    // checking columns
    checkRow(board[0], board[3], board[6]);
    checkRow(board[1], board[4], board[7]);
    checkRow(board[2], board[5], board[8]);
    // checking diagonals
    checkRow(board[0], board[4], board[8]);
    checkRow(board[2], board[4], board[6]);
};


  let makeMark = function () {
    if ($(this).html() === ''){
      if (turnCount % 2 === 0) {
      $(this).html('X');
      board[event.target.id] = 'X';
      //alert(event.target.id);
      //alert(board);
      getWinner();
  } else {
    $(this).html('O');
    board[event.target.id] = 'O';
      //alert(event.target.id);
      //alert(board);
    getWinner();
  }
  turnCount++;
  }
};
  $('.square').on('click', makeMark);

























module.exports = true;
