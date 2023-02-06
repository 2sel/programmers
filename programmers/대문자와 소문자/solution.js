// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120893

const solution = my_string => [...my_string].map(a => a.charCodeAt() >= 65 && a.charCodeAt() < 97 ? a.toLowerCase() : a.toUpperCase()).join("")