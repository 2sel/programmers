// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120853

function solution(s) {
    let arr = [];
    s = s.split(' ');
    for(let v of s) v === 'Z' ? arr.length ? arr.pop() : '' : arr.push(v);
    
    return arr.reduce((a,v)=>a+ +v,0)
}