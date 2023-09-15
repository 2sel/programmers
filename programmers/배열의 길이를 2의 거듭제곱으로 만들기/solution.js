// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181857

function solution(arr) {
  const l = arr.length;
  const total = 2 ** Math.ceil(Math.log2(l));
  return [...arr, ...new Array(total - l).fill(0)];
}
// 거듭제곱 연산자를 사용하여 2의 거듭제곱(2 ** @) 형태로 만들고 길이를 곱해준다. 그리고 배열과 해당 배열 위에 0을 추가하는 fill을 입력 후 return 해준다.