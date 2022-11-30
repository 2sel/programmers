// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120854

function solution(strlist) {
    let answer = [];
    
    for(let i=0; i<strlist.length; i++){
        answer.push(strlist[i].length);
    }
    
    return answer;
}