// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/77884

function solution(left, right) {
    var answer = 0;
    
    for(let i = left; i <=right; i++){
        if(Number.isInteger(Math.sqrt(i))){
            // sqrt = 제곱근
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer
}