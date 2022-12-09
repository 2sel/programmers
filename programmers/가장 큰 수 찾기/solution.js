// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120899

function solution(array) {
    let arr=[...array]
    
    for(let i=0; i<array.length; i++){
        if( Math.max(...array) === array[i] ){
            return [Math.max(...array),i]
        }
    } 
}