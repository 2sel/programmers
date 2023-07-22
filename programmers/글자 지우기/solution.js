// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181900

function solution(my_string, indices) {
    
    return [...my_string].map((a, i) => indices.includes(i) ? 0 : a).filter(a=>a!==0).join("")
}
//배열로 만들어서 indices에 있는 i번째가 있으면 0 아니면 a. filter돌려서 0이 아닌 것들만 걸러서 문자열 만듬.