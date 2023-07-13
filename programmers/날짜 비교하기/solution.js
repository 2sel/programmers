// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181838

function solution(date1, date2) {
    return new Date(date2) > new Date(date1) ? 1 : 0;
    // date 생성자를 사용하면 좀더 짧게 풀 수 있음(서치)
}