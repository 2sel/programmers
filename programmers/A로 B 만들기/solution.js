// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120886

function solution(before, after) {
    // 정렬하고 리턴
    before = [...before].sort()
    after = [...after].sort()
    return before.filter((a,i) => a === after[i]).length === after.length ? 1 : 0
}