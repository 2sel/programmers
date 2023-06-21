// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181864

function solution(myString, pat) {
  return myString.split("").map((a) => (a === "A" ? "B" : "A"))
    .join("").includes(pat)? 1: 0;
}
//const solution = (myString, pat) => [...myString].map(v => v === 'A' ? 'B' : 'A').join('').includes(pat) ? 1 : 0 << 좀더 깔끔하게 풀 수 있음!