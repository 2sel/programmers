// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/68935

function solution(n) {
    let reverse_th = n.toString(3).split('').reverse().join('')
    return parseInt(reverse_th, 3)
}

// 1. 숫자를 문자열로 변환(toString)
// 2. 문자열을 분할, reverse로 앞뒤로 뒤집기
// 3. join으로 붙히고 parseInt로 정수 변환. 3진법이라서 3 추가로 입력 