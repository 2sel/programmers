// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181911

function solution(my_strings, parts) {
     return parts.map(([s, e], i) => {
        return my_strings[i].slice(s, e + 1)
    }).join('')
}

// split과 slice를 사용해도 되지만 map을 사용한다면 좀더 간결하게 문제를 풀 수 있음!