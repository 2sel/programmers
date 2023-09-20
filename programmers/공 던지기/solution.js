// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120843

function solution(numbers, k) {
    let catchBall = 1
    for(let i = 0 ; i < k-1 ; i ++) {
        catchBall+=2
        if(catchBall > numbers.length) {
            catchBall-=numbers.length
        }
    }
    return catchBall
}