// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120836

function solution(n) {
    
    const result = []
    
    for(let i = 1 ; i <= n ; i ++) {
        if(n%i === 0) result.push(i)
    }

    return result.length
}

