const { truncate, capitalize, isPalindrome } = require('./utils.js');
let p=0,f=0;
function assert(c,m){if(c){p++;console.log('PASS: '+m)}else{f++;console.log('FAIL: '+m)}}

assert(truncate('hello',3)==='hel', 'truncate(hello,3) = hel');
assert(capitalize('world')==='World', 'capitalize(world) = World');
assert(isPalindrome('racecar')===true, 'isPalindrome(racecar) = true');

console.log('\n'+p+' passed, '+f+' failed');
process.exit(f>0?1:0);
