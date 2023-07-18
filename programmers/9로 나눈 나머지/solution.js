// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181914

function solution(number) {
     return [...number].reduce((a, b) => a+Number(b), 0)%9
}

// reduce를 사용하여 모든 값을 더하고 9로 나누고 남은 값을 return할 수 있게 작성.