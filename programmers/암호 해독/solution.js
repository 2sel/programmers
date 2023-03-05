// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120892

function solution(cipher, code) {
    return [...cipher].filter((a,i)=>(i+1)%code===0).join('')
}