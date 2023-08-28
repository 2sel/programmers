// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120896

function solution(s) {
    let res = [];
    for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);
    return res.sort().join('');
}

// for...of문을 사용함과 동시에 indexOf와 lastIndexOf를 사용하여 앞과 뒤를 추적하여 해당 값이 하나만 있을 경우 바로 정렬할 수 있도록 했다.
// 풀리지 않아서 서치로 해결...! 
// https://beomy.tistory.com/20
// https://oliviakim.tistory.com/81