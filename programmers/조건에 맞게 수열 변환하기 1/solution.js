// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181882

function solution(arr) {
    return arr.map(a => {
        if(a >=50 && a % 2 == 0){return Math.floor(a/2)}
        else if (a < 50 && a % 2 == 1){return a*2}
        return a
    })
}