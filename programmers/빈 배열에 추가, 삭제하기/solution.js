// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181860

function solution(arr, flag) {
    let answer = [];
    
    for(let i=0; i<flag.length; i++){
        if(flag[i]){
            answer.push(...Array(arr[i]*2).fill(arr[i]))
        } else{
            answer.splice(answer.length - arr[i],arr[i])
        }
    }
    
    return answer
}
// 다른 방법으로는 forEach를 사용하는 경우가 있다
