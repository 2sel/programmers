// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120862

function solution(numbers) {
    numbers.sort((a, b) => b - a);
    const first = numbers[0] * numbers[1]
    const last = numbers[numbers.length -1] * numbers[numbers.length - 2];
    return first > last ? first : last;
}