// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12912

function solution(a, b) {
    // 가우스 공식 = n(a+b)/2
    return (Math.abs(a-b)+1)*(a+b)/2
}