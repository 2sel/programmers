// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/86051

function solution(numbers) {
    var answer = 0;
    for(let i=0; i<10; i++){
        if(!numbers.includes(i)) answer += i;
    }
    return answer;
}