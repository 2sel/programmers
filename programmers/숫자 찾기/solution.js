// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120904

const solution = (num,k) =>
[...num+''].indexOf(k+'') !== -1 ? [...num+''].indexOf(k+'')+1 : -1

// [+ '']와 (k+'')는 split을 대신 해주는 개념으로 개꼼수다... 타입스크립트에서 진행할 경우 에러가 난다고 한다...