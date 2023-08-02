// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181931

function solution(a, d, included) {
    let answer = 0;
    
    included.map((Cv, index) => {
        answer += Cv && a + d * index
        })
    return answer;
}