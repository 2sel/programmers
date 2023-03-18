// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120888

// function solution(my_string) {
//      const arr = my_string.split("");
//     const notArr = Array.from(new Set(arr));
//     return notArr.join("");
// }

const solution = my_string => [...new Set(my_string)].join('')