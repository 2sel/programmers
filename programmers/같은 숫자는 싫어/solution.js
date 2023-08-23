// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12906

function solution(arr){
    return arr.filter((a,b)=>a != arr[b+1]);
}

// 겹치는 원소를 filter를 사용하여 거르기