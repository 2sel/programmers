// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12931

function solution(n)
{
let answer = 0;
    let m = String(n);
    
    for(let i = 0; i<m.length; i ++){
        answer += parseInt(m[i]);
    }
    return answer;
}