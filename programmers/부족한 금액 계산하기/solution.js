// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/82612

function solution(price, money, count) {
    let total = price * count * (count +1) /2 - money
    return total > 0? total : 0
}

// 가우스 공식(등차수열의 합) - 서치로 해결...
// https://charlie0417.tistory.com/96