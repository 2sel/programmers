// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/68935

function solution(n) {
    let reverse_th = n.toString(3).split('').reverse().join('')
    return parseInt(reverse_th, 3)
}