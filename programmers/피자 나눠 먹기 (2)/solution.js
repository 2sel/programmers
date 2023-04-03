// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120815

function solution(n) {
    let answer = 1;
    while((answer *6) %n !==0){
        answer ++;
    }
    return answer;
}