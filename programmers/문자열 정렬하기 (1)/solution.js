// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120850

const solution = my_string => [...my_string].filter(a => !Number.isNaN(+a)).map(a =>+a).sort ((a,b)=>(a-b))