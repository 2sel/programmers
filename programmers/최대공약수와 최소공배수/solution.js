// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12940

function solution(n, m) {
    let answer = [];
    const greatest = (a,b) =>{
        if(b === 0){return a} else {return greatest(b,a%b)}
    }
    
    const least = (a,b) => (a*b) / greatest(a,b)
    
    return [greatest(n,m), least(n,m)]
}
// 유클리드 호제법으로 푸는 문제.
// https://chanhuiseok.github.io/posts/algo-41/