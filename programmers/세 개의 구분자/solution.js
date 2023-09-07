// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181862

function solution(myStr) {
    const result = myStr.split(/[a|b|c]/g).filter(a =>a)
    
    return result.length ? result : ["EMPTY"]
}

// slice 혹은 split 사용을 예상했지만 정규표현식까진 생각하지 못함.
// 정규표현식은 검색을 통해 해결