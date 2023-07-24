// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181895

function solution(arr, intervals) {
    let [[a,b],[c,d]] = intervals
    return [...arr.slice(a, b+1), ...arr.slice(c, d+1)]
}
// 구조분해할당 사용하여 intervals로 만든 후 식을 괄호로 감싸서(입출력 예시 참고) return. 구조분해할당은 서치참고