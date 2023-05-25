/**
 * @function initializePage
 * @description Initializes the page by setting the text of the 'message' element to 'Hello, World!'.
 */
$(document).ready(function() {
  $('#message').text('Hello, JS !');
});

/**
 * @function sum
 * @description Calculates the sum of two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of the two numbers.
 */
function sum(a, b) {
  return a + b;
}