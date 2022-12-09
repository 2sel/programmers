// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120899

function solution(array) {
    let arr=Math.max(...array)
    
    for(let i=0; i<array.length; i++){
        if(array[i] === arr){
            return [arr ,i]
        }
    } 
}

