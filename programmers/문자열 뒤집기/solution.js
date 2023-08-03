// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181905

function solution(my_string, s, e) {
    let params = my_string.substring(s, e + 1).split("").reverse();
    let arr = my_string.split("");
    arr.splice(s, e - s + 1, ...params);

  return arr.join("");
}