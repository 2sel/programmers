// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120830

function solution(n, k) {
    
    
    let answer = n * 12000 + k * 2000 - Math.floor(n/10)*2000
    
    return answer;

}