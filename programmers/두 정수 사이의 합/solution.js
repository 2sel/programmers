// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12912

function solution(a, b) {
    // 가우스 공식 = n(a+b)/2
    // n을 a와 b만을 표현하기 위해 a,b만 이루어진 식은 ((b-a)+1)(a+b)/2 이다.
    // 다만 a와 b의 대소관계가 정해져 있지 않기 때문에 절대값으로 Math.abs(a-b)를 둔다.
    return (Math.abs(a-b)+1)*(a+b)/2
}