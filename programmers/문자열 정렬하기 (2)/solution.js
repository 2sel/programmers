// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120911

function solution(my_string) {
    var answer = '';
    answer = my_string.toLowerCase().split("").sort().join("");
    return answer
}