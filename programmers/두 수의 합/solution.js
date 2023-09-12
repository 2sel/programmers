// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181846

function solution(a, b) {
    const A = BigInt(a);
    const B = BigInt(b);
    return String(A+B)
}

//BigInt를 처음 알았다. BigInt는 Number가 표현할 수 있는 범위를 넘어선 정수를 처리하기 위한 함수라고 한다.