// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181912

function solution(intStrs, k, s, l) {
    var answer = [];
    
    intStrs.forEach(a => {
        const cut = a.slice(s, s+l)
        const num = Number(cut)
        if(num > k){
            return answer.push(num)
        }
    })
    
    return answer
}