// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181939

function solution(a, b) {
      const atob = String(a) + String(b)
    const btoa = String(b) + String(a)
    
    return atob >= btoa ? Number(atob) : Number(btoa)
}