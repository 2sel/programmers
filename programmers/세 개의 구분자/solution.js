// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181862

function solution(myStr) {
    const result = myStr.split(/[a|b|c]/g).filter(a =>a)
    
    return result.length ? result : ["EMPTY"]
}