// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120904

const solution = (num,k)=>
[...num+''].indexOf(k+'') !== -1 ? [...num+''].indexOf(k+'')+1 : -1
