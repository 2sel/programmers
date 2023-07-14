// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181938

function solution(a, b) {
    let num1 = parseInt(a+""+b+"");
    let num2 = 2*a*b;
    return num1 > num2 ? num1 : num2;
    
    // parseInt를 사용해서 정수로 변환(생각 못해서 풀이 보고 수정)
}