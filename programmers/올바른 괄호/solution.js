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

// 아주 좋은 풀이! 공부를 위해 달아둠!
// let cum = 0
//     for (let paren of s) {
//         cum += paren === '('? 1: -1
//         if(cum < 0) {
//             return false
//         }
//     }
//     return cum === 0? true: false;