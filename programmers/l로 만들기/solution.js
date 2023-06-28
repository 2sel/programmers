// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181834

function solution(myString) {
     return [...myString].map(a => a.charCodeAt() < 108 ? 'l' : a).join("")
}