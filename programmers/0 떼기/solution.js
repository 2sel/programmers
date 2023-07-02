// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181847

function solution(n_str) {
    return n_str.replace(/(^0+)/, ""); 
}
//정규식을 안다면 빠르게 풀 수 있지만, 정규식에 익숙하지 않아... 서치로 해결...ㅠ 