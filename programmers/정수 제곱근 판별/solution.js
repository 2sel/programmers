// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12934

function solution(n) {
    if(Number.isInteger(Math.sqrt(n))){
        return Math.pow(Math.sqrt(n)+1, 2)
    }
    else {
        return -1
    }
}
// x의 제곱 리턴하는 조건이랑 x+1 제곱리턴하는거 너무 어렵다...;;;
