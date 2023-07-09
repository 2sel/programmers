// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181898

function solution(arr, idx) {
    var answer = 0;
    for(let i = idx; i<arr.length; i++){
        if(arr[i]==1){
            return i;
        }
    }
    return -1;
}
