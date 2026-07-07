// String & number utility functions with bugs

// BUG 1: truncate() cuts off one character too many
function truncate(str, maxLen) {
  return str.slice(0, maxLen - 1);  // BUG: should be maxLen, not maxLen - 1
}

// BUG 2: capitalize() only uppercases first letter but loses rest of string  
function capitalize(str) {
  return str[0].toUpperCase();  // BUG: should be str[0].toUpperCase() + str.slice(1)
}

// BUG 3: isPalindrome() always returns false for odd-length strings
function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed + 'x';  // BUG: extra 'x' appended
}

module.exports = { truncate, capitalize, isPalindrome };
