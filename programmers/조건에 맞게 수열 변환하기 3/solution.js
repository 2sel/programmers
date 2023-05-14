// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181835

function solution(arr, k) {
    let answer = [];
    if(k%2 !==0) {
        answer = arr.map(item => item * k)
    } else {
        answer = arr.map(item => item + k)
    }
    return answer;
}