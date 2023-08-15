// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12918

function solution(s) {
    if(s.length === 4 || s.length === 6){
        return s.split("").every(c => !isNaN(c)) 
    } else {
        return false;
    }
    
}