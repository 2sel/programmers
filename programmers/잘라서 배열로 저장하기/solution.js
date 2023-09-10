// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120913

function solution(my_str, n) {
    var answer = [];
    
    for(let i=0; i<my_str.length; i+=n){
        answer.push(my_str.substr(i,n))
    }
    
    return answer
}