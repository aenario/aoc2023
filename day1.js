const INPUT = require('fs').readFileSync('./input-day1.txt', 'utf8');

const lines = INPUT.split('\n').filter(l => Boolean(l));

const numbers_in_letters = [
'one',
'two',
'three',
'four',
'five',
'six',
'seven',
'eight',
'nine',
];

const VALUE_OF = {};
numbers_in_letters.forEach((letter, idx) => {
    VALUE_OF[letter] = idx+1;
    VALUE_OF[idx+1+''] = idx+1
});

const matchWithOverlap = (input, reg) => {
    let matches = [], found;
    while (found = reg.exec(input)) {
        matches.push(found[0]);
        reg.lastIndex = found.index+1;
    }
    return matches
}

const RESULT = lines.reduce((acc, line) => {
    const reg = new RegExp('[1-9]|'+numbers_in_letters.join('|'), 'g');
    const matches = matchWithOverlap(line, reg);
    return acc + VALUE_OF[matches[0]] * 10 + VALUE_OF[matches.pop()];
}, 0)

console.log(RESULT)