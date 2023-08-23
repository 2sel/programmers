// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12906

function solution(arr){
    return arr.filter((a,b)=>a != arr[b+1]);
}