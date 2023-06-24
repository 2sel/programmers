// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181926

function solution(n, control) {
     const controller = {
        w:1,
        s:-1,
        d:10,
        a:-10
    }
    return [...control].reduce((acc, cur)=>acc + controller[cur], n);
}
// reduce 사용하기가 어렵다...!