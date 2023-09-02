// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12930

function solution(s) {
    return s.split(" ").map(e => e.split("").map((e, i) => (i+1)%2 !== 0 ? e.toUpperCase() : e.toLowerCase()).join("")).join(" ");

}
// 정규식을 사용하면 더 빠르게 풀 수 있음...ㅎ
// 원래는 길게 끊어서 테스팅했으나, 더 빠르게 풀 수 있는 방법 사용.
// 참고 : https://velog.io/@jakeseo_me/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-18-%EC%9D%B4%EC%83%81%ED%95%9C-%EB%AC%B8%EC%9E%90-%EB%A7%8C%EB%93%A4%EA%B8%B0