'use strict';

let changeColorRed = function () {
  $(this).css('background-color', 'red');
};

$('.square').on('click', changeColorRed);






module.exports = true;
