// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120871

function solution(n) {
    let x3 = 0
    for(let i = 1; i<=n; i++){
        x3++
        while(x3.toString().includes('3')|| x3% 3 === 0){
            x3++
        
        }
    }
    return x3
}