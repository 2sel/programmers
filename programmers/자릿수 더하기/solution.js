// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120906?language=javascript

function solution(n){
    return (n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0)
}