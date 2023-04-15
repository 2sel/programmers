// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120886

function solution(before, after) {
    return before.split('').sort().join('') === after.split('').sort().join('') ? 1 : 0;
}