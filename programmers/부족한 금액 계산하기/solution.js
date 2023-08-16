// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/82612

function solution(price, money, count) {
    let total = price * count * (count +1) /2 - money
    return total > 0? total : 0
}

// 가우스 공식 - 서치로 해결...