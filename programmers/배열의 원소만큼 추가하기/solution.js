// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181861

function solution(arr) {
    return arr.reduce((list, num) => [...list, ...new Array(num).fill(num)], []);
}