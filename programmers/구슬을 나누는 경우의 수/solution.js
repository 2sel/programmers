// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120840

function solution(balls, share) {
    let factorial = [BigInt(1)];
    
    for(let i = 1; i<= balls; i++){
        factorial[i] = factorial[i-1] * BigInt(i);
    }
    
    return factorial[balls] / (factorial[balls - share] * factorial[share])
}
// 경우의 수 공식을 사용해서 푸는 문제. 너무 어려워서 고민하다 결국 서치해서 알게 됐다... 코딩으로 풀기 어려운 문제였음...
// BigInt를 사용해야 풀리는 문제이다. 단 재귀함수로도 풀리는 문제다
// 해석 참고 > https://velog.io/@jiyaho/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-Lv.0-%EA%B5%AC%EC%8A%AC%EC%9D%84-%EB%82%98%EB%88%84%EB%8A%94-%EA%B2%BD%EC%9A%B0%EC%9D%98-%EC%88%98-JavaScript