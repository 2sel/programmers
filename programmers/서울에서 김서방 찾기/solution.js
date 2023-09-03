// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12919

function solution(seoul) {
    let answer = ``;
    for(let i =0; i<seoul.length; i++){
        if (seoul[i] == "Kim"){
            answer =`김서방은 ${i}에 있다`
        }
    }
    return answer
}
// 잘 안풀렸던 이유는 ${} 사용법을 몰라서였다...
// 참고 https://velog.io/@ieed0205/Mybatis-%EC%B0%A8%EC%9D%B4%EC%A0%90
// + indexOf()로도 풀이가 가능!