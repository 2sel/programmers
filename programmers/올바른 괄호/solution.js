// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12909

function solution(s){
   let stack = 0;
    for(const arr of s){
        if(arr === '(') {
            stack++
        } else {
          stack--;  
        }
        if(stack < 0){
            return false;
        }
    }
    return !stack
}