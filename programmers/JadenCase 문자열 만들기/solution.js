// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12951

function solution(s) {
    var answer = '';
    let cut = s.split(' ');
    let plus = cut.map(x => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase())
    
    answer = plus.join(" ")
    return answer;
}