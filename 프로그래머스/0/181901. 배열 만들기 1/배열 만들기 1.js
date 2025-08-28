function solution(n, k) {
    let answer = [];
    for(let i = k; i <= n; i+=k){
        answer.push(i);
    }
    return answer;
}

//오름차순을 보고 sort를 먼저 생각했지만 이렇게 풀어도 문제가 없다! 