// Reproduce: isPalindrome bug
const { isPalindrome } = require('./utils.js');

const testCases = [
  { input: 'racecar', expected: true },
  { input: 'hello',   expected: false },
  { input: 'a',       expected: true },
  { input: 'aa',      expected: true },
  { input: '',        expected: true },
];

let allPass = true;

for (const { input, expected } of testCases) {
  const result = isPalindrome(input);
  const status = result === expected ? 'PASS' : 'FAIL';
  if (status === 'FAIL') allPass = false;
  console.log(`${status}: isPalindrome('${input}') => ${result} (expected: ${expected})`);
}

console.log('\n---');
console.log(allPass ? 'ALL PASSED' : 'BUG REPRODUCED: isPalindrome returns wrong results');
process.exit(allPass ? 0 : 1);
