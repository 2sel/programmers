// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120897

function solution(n) {
    let solution=[];
    
    for(let i =1; i<=n; i++){
        if(n%i === 0){
            solution.push(i)
        } 
    }
    return solution;
}