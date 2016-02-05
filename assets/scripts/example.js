'use strict';

let board = ['', '', '', '', '', '', '', '', ''];
let turnCount = 0;
let playerX = 0;
let playerO = 0;
let ties = 0;
let player;

const myApp = {
  baseUrl: 'http://tic-tac-toe.wdibos.com/'
};


// creates a new game when player signs in
let createGame = function() {
  $.ajax({
    url: myApp.baseUrl + '/games',
    type: 'POST',
    headers: {
      Authorization: 'Token token=' + myApp.user.token,
    },
    data: {}
  }).done(function(data) {
    myApp.game = data.game;
    console.log(data);
  }).fail(function(abc) {
    console.error(abc);
  });
};

// get all games associated with a user
let getGames = function() {
  $.ajax({
    url: myApp.baseUrl + '/games',
    type: 'GET',
    headers: {
      Authorization: 'Token token=' + myApp.user.token,
    },
    data: {}
  }).done(function(data) {
    myApp.games = data.games;
    $('.games').html(data.games.length);
    console.log(data);
  }).fail(function(requestObject){
    console.error(requestObject);
  });
};

// updates the moves of each player
let updateMove = function(player, index) {
  $.ajax({
    url: myApp.baseUrl + '/games/' + myApp.game.id,
    type: 'PATCH',
    headers: {
      Authorization: 'Token token=' + myApp.user.token,
    },
    data: {
      "game": {
        "cell": {
          "index": index,
          "value": player,
        },
        "over": false
      }
    }
  }).done(function(data) {
    myApp.game = data.game;
    console.log(data);
  }).fail(function(abc) {
    console.error(abc);
  });
};

// signs up a new player
let signUpUser = function(event) {
  event.preventDefault();
  let item = new FormData(event.target);
  $.ajax({
    url: myApp.baseUrl + '/sign-up',
    type: 'POST',
    contentType: false,
    processData: false,
    data: item

  }).done(function(data) {
    console.log(data);
  }).fail(function(abc){
    console.error(abc);
  });
};

// signs in a previously signed up player
let signInUser = function() {
  event.preventDefault();
  let item = new FormData(event.target);
  $.ajax({
    url: myApp.baseUrl + '/sign-in',
    type: 'POST',
    contentType: false,
    processData: false,
    data: item

  }).done(function(data) {
    myApp.user = data.user;
    console.log(data);
    createGame();
    getGames();

  }).fail(function(abc) {
    console.error(abc);
  });

};

// changes the password of a previously signed in player
let changePass = function() {
  event.preventDefault();
  if(!myApp.user) {
    console.error('Try Again!');
    return;
  }
  let item = new FormData(event.target);
  $.ajax({
    url: myApp.baseUrl + '/change-password/' + myApp.user.id,
    type: 'PATCH',
    headers: {
      Authorization: 'Token token=' + myApp.user.token,
    },
    contentType: false,
    processData: false,
    data: item,
  }).done(function(data) {
    console.log(data);
  }).fail(function(abc) {
    console.error(abc);
  });
};

// signs out a previously signed in user
let signOutUser = function() {
  event.preventDefault();
  if(!myApp.user) {
    console.error('Try Again!');
    return;
  }
  $.ajax({
    url: myApp.baseUrl + '/sign-out/' + myApp.user.id,
    type: 'DELETE',
    headers: {
      Authorization: 'Token token=' + myApp.user.token,
    },
    contentType: false,
    processData: false,
}).done(function(data) {
  console.log(data);
  console.log('Sign out pass');
}).fail(function(abc) {
  console.error(abc);
});
};

// handles user status
let init = function() {
  $('#sign-up').on('submit', signUpUser);
  $('#sign-in').on('submit', signInUser);
  $('#change-pass').on('submit', changePass);
  $('#signoutbut').on('click', signOutUser);
};

$(document).ready(init);

// resets the game
const resetGame = function() {
  turnCount = 0;
  board = ['', '', '', '', '', '', '', '', ''];
  $('.square').html('');
  createGame();
  getGames();
};

// checks for a tie
let isItATie = function() {
  if(turnCount === 9) {
    $('.show-winner').html('Its a Tie!');
    ties += 1;
    $('.ties').html(ties);
    //resetGame();
  }
};

//$('button').on('click', resetGame);

// checks each row combination for a either x or o win
let checkRow = function(a, b, c) {
    if (a === 'x' && b === 'x' && c === 'x') {
        //alert('X wins');
        playerX += 1;
        $('.show-winner').html('Player X Wins!');
        $('.playerX').html(playerX);

    } else if (a === 'o' && b === 'o' && c === 'o') {
        //alert('O wins');
        playerO +=1;
        $('.show-winner').html('Player O Wins!');
        $('.playerO').html(playerO);

    }
};

// calls checkRow on all possible win combinations
let getWinner = function() {
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

  // drives the ship
  let makeMark = function() {

    if ($(this).html() === ''){
      if (turnCount % 2 === 0) {
        player = 'x';
        turnCount++;
        $(this).html(player);
        board[event.target.id] = player;

        updateMove('x', event.target.id); // may have to move this
        getWinner();
        isItATie();


    } else {
      player = 'o';
      turnCount++;
      $(this).html(player);
      board[event.target.id] = player;

      updateMove('o', event.target.id);
      getWinner();
      isItATie();
    }
    }
  };
      $('.square').on('click', makeMark);
      $('#reset').on('click', resetGame);

module.exports = true;
