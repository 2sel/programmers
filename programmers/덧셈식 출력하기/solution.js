// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181947

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const aN= Number(input[0]) // a, b를 각각 다른 변수에 담아주고 출력
    const bN = Number(input[1])
     console.log(`${aN} + ${bN} = ${aN + bN}`) 
});