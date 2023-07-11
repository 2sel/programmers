// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181891

function solution(num_list, n) {
    num_list.push(...num_list.splice(0, n));
    return num_list
}