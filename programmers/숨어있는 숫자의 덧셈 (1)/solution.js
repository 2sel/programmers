// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120851

function solution(my_string) {
    let answer = 0;
    my_string.split("").map(e => !isNaN(e)? answer += Number(e):0 )
    return answer;
}