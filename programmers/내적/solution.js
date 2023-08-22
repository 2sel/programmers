// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/70128

function solution(a, b) {
    let answer = 0;
    
    for(let i=0; i< a.length; i++){
        answer += a[i]*b[i]
    }
    return answer
}
// reduce로도 풀이가 가능하다고 한다.