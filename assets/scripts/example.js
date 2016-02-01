'use strict';

let changeColorRed = function () {
  $(this).css('background-color', 'red');
};

let reset = function () {
  $('.square').css('background-color', '#4e4e4e');
};


$('.square').on('click', changeColorRed);

$('button').on('click', reset);











module.exports = true;
