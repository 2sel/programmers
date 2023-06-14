// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181842

function solution(str1, str2) {
    return Number(str2.includes(str1))
}

// return str2.includes(str1) ? 1 : 0; 삼항연산자로 사용가능.