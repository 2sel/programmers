// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181849

function solution(num_str) {
   return  [...num_str].reduce((acc, curr) => acc + Number(curr), 0)
}