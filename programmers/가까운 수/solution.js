// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120890

function solution(array, n) {
    array.sort((a,b) => Math.abs(n - a) - Math.abs(n - b) || a - b) 
    return array[0];
}
// sort 메서드를 사용해서 정렬, 가장 가까운 수 return 