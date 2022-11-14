// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120585

function solution(array, height) {
    return array.filter(a => a > height).length;
}