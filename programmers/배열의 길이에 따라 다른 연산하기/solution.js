// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181854

const solution = (arr, n) => arr.map((num, idx) => (
    arr.length % 2 !== idx % 2
    ? num + n
    : num
))
//if문을 돌렸는데 map을 돌리고 난 후 조건을 걸어주고 삼항연산자를 쓴다면 깔끔하게 풀이할 수 있다.