// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120846

// 합성수는 소수가 아닌 자연수로 소수를 찾고 걸러내야 함
// 다른 분 코드 참고
function solution(n) {
    let arr = new Set();
    for(let i = 1; i <= n; i++){
        for(let j =2; j < i; j++){
            if(i%j === 0)
                arr.add(i);
        }
    }
    return arr.size;
}