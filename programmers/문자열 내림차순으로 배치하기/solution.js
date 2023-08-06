// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12917

function solution(s) {
    return s.split("").sort().reverse().join("")
}
// sort()메서드는 오름차순이기 때문에 정렬을 하고 reverse()를 사용하여 내림차순을 만든다.
// 내림차순을 할거라면 sort((a,b) => a<b ? 1:-1) 사용