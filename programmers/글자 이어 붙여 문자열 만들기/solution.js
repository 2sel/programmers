// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181915

function solution(my_string, index_list) {
    return index_list.reduce((acc, cur) => acc+my_string[cur], "")
}