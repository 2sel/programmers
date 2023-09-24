// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12947

function solution(x) {
    let sum =0;
    let arr = String(x).split("");
    for(let i=0; i<arr.length; i++){
        sum += Number(arr[i])
    }
    return (x % sum == 0)?true:false
}

// 1. 자릿수를 나눠서 더할 수 있도록 만들고 for문을 돌려 더한다.
// 2. 더한 값을 나눠서 조건에 따라 true,false return.