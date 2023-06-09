// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181927

function solution(num_list) {
    const [a, b] = [...num_list].reverse();
    return [...num_list, a > b ? (a-b):a*2];
}

// 결국 안풀려서 다른 분들의 방법을 보고 품. 공부가 더 필요!