// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120848

function solution(n) {
    let i = 1;
    let f = 1;
    while (f*i < n) f*=++i;
    return i;
}

// for문으로도 풀이 가능 