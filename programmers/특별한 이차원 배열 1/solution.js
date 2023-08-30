// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181833

function solution(n) {
    const arr = Array(n).fill(Array(n).fill(0))
    
    return arr.map((a, i) => {
        return a.map((b, bi) => bi === i ? 1 : b)
    })
}
// 풀리지 않아서 서치로 해결. 어떤 방식대로 푸는지 해석할 필요 있음...ㅜㅜ