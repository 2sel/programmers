// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120889

function solution(sides) {
     
    return solution = sides.reduce((a,b) => a+b)-Math.max(...sides) > Math.max(...sides)  ? 1 : 2
}

// 진짜 생각보다 어려웠다 복습이 필요함! 
// 중간값+작은값 - 가장 큰 값 > 가장 큰값 이어야한다는 조건이다.
