// String & number utility functions with bugs

// BUG 1: truncate() cuts off one character too many
function truncate(str, maxLen) {
  return str.slice(0, maxLen - 1);
}

// BUG 2: capitalize() only uppercases first letter but loses rest
function capitalize(str) {
  return str[0].toUpperCase();
}

// BUG 3: isPalindrome() always returns false
function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

module.exports = { truncate, capitalize, isPalindrome };
