'use strict';


//const board = $('.square');

let board = ['','','','','','','','',''];
let turnCount = 0;
let playerX = 0;
let playerO = 0;
let ties = 0;
// let playerXWins = 0;
// let playerOWins = 0;

const resetGame = function () {
  turnCount = 0;
  board = ['','','','','','','','',''];
  $('.square').html('');
};

let isItATie = function () {
  if(turnCount === 9) {
    alert('Its a Tie');
    ties += 1;
    $('#ties').html(ties);
    resetGame();
  }
};

$('button').on('click', resetGame);

let checkRow = function(a, b, c) {
    if (a === 'X' && b === 'X' && c === 'X') {
        alert('X wins');
        playerX += 1;
        $('#playerX').html(playerX);
        resetGame();
        //return 'X is the winner';
    } else if (a === 'O' && b === 'O' && c === 'O') {
        alert('O wins');
        playerO +=1;
        $('#playerO').html(playerO);
        resetGame();
        //return 'O is the winner';

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
        turnCount++;
        $(this).html('X');
        board[event.target.id] = 'X';
      //alert(event.target.id);
      //alert(board);
        getWinner();
        isItATie();
        console.log(turnCount);
      //console.log(board);

  } else {
      turnCount++;
      $(this).html('O');
      board[event.target.id] = 'O';
      //alert(event.target.id);
      //alert(board);
      getWinner();
      isItATie();
      console.log(turnCount);
      //console.log(board);
    }
      //turnCount++;
    }
  };
    $('.square').on('click', makeMark);

























module.exports = true;
