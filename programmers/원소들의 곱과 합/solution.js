// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181929

function solution(num_list) {
      return Math.pow(num_list.reduce((a,b) => a+b), 2) > num_list.reduce((a,b) => a*b) ? 1 : 0;
}
