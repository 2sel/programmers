// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181867

function solution(myString) {
    return myString.split("x").map(v => v.length)
    // x로 자르고 map돌려서 길이 return
}