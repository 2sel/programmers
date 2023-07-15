// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181945

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
        input = [line];
}).on('close',function(){
    str = input[0];
    [...str].forEach(c => console.log(c))
});

// forEach는 배열을 순회하는 메서드이기 때문에 map을 돌리면 길어지므로 해당 메서드를 사용하면 더 편함!!!

