// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120824

function solution(num_list) {
    let list = [num_list.filter(n => n%2 === 0).length, num_list.filter(n => n%2 != 0).length ]
        return list
}