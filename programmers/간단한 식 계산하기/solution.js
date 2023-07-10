// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181865

function solution(binomial) {
    const [a,op,b] = binomial.split(' ')
    const operator = {
        '+': (a,b)=>a+b,
        '-': (a,b)=>a-b,
        '*': (a,b)=>a*b
    }
    return operator[op](Number(a),Number(b))
}