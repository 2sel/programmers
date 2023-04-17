// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120845

function solution(box, n) {
    let answer = box.map(x => Math.floor(x/n))
    return answer.reduce((a,b) => a*b);
}