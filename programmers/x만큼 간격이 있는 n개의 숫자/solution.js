// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12954

function solution(x, n) {
    let answer = [];
    for (let i = 1; i<=n; i++){//i을 선언후 1을 할당하여 우리가 n개만큼 출력을 할거니 n이하로 반복하라는 뜻이며 이때 한번 반복한뒤 i는 1씩 증가
        answer.push(x*i);//push()를 알아두자
    }
    return answer;
}